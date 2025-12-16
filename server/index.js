import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
// Importamos o nosso template "tipo blade"
import { getEmailTemplate } from './emailTemplate.js';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, area, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  // Geramos o HTML usando os dados recebidos
  const htmlContent = getEmailTemplate(name, email, area, message);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    replyTo: email,
    subject: `✨ Novo Contacto Solara: ${name} - ${area === 'both' ? 'Geral' : area.charAt(0).toUpperCase() + area.slice(1)}`,
    text: `Nome: ${name}\nEmail: ${email}\nÁrea: ${area}\nMensagem: ${message}`, // Fallback texto puro
    html: htmlContent // Nosso template bonito
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: 'Falha ao enviar email.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});