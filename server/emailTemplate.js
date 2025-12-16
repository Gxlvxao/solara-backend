// server/emailTemplate.js

export const getEmailTemplate = (name, email, area, message) => {
  // Cores da marca (aproximadas do CSS global)
  const colors = {
    primary: '#5E1118',    // Solara Burgundy
    secondary: '#F2A370',  // Solara Peach
    bg: '#F8FAFC',        // Neutral 50
    text: '#1C1917',      // Neutral 900
    white: '#FFFFFF',
    border: '#E7E5E4'
  };

  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Contacto - Solara Project</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
    body { margin: 0; padding: 0; background-color: ${colors.bg}; font-family: 'Poppins', Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; background-color: ${colors.white}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-top: 40px; margin-bottom: 40px; }
    .header { background-color: ${colors.primary}; padding: 40px 20px; text-align: center; }
    .logo-text { color: ${colors.white}; font-size: 24px; letter-spacing: 0.2em; font-weight: 300; margin: 0; text-transform: uppercase; }
    .content { padding: 40px 30px; color: ${colors.text}; }
    .badge { display: inline-block; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; background-color: ${colors.secondary}; color: ${colors.primary}; margin-bottom: 20px; }
    .field-group { margin-bottom: 24px; }
    .label { display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C; margin-bottom: 8px; font-weight: 600; }
    .value { font-size: 16px; line-height: 1.5; color: ${colors.text}; font-weight: 400; }
    .message-box { background-color: ${colors.bg}; border-left: 4px solid ${colors.secondary}; padding: 20px; border-radius: 4px; margin-top: 8px; }
    .footer { background-color: ${colors.text}; color: #A8A29E; padding: 30px; text-align: center; font-size: 12px; font-weight: 300; }
    .divider { height: 1px; background-color: ${colors.border}; margin: 30px 0; }
    .btn-link { color: ${colors.primary}; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="logo-text">Solara Project</h1>
      <p style="color: ${colors.secondary}; margin-top: 10px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Investments & Consultancy</p>
    </div>

    <div class="content">
      <div style="text-align: center;">
        <span class="badge">Novo Lead Recebido</span>
        <h2 style="font-weight: 300; font-size: 28px; margin: 0 0 10px 0;">Olá, Equipa.</h2>
        <p style="font-weight: 300; color: #57534E; margin-bottom: 30px;">
          Recebemos uma nova solicitação de contacto através do website. Abaixo estão os detalhes para análise.
        </p>
      </div>

      <div class="divider"></div>

      <div class="field-group">
        <span class="label">Nome do Cliente</span>
        <div class="value">${name}</div>
      </div>

      <div class="field-group">
        <span class="label">Email de Contacto</span>
        <div class="value">
          <a href="mailto:${email}" class="btn-link">${email}</a>
        </div>
      </div>

      <div class="field-group">
        <span class="label">Área de Interesse</span>
        <div class="value" style="text-transform: capitalize;">
          ${area === 'solara' ? 'Investimentos e Consultoria' : area === 'vision' ? 'Vision Press (Comunicação)' : 'Ambas as Áreas'}
        </div>
      </div>

      <div class="field-group">
        <span class="label">Mensagem</span>
        <div class="value message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>

      <div class="divider"></div>

      <div style="text-align: center;">
        <a href="mailto:${email}" style="display: inline-block; background-color: ${colors.primary}; color: ${colors.white}; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 14px;">
          Responder Agora
        </a>
      </div>
    </div>

    <div class="footer">
      <p>© ${currentYear} Solara Project. Todos os direitos reservados.</p>
      <p style="margin-top: 10px;">Este é um email automático enviado pelo sistema do site.</p>
    </div>
  </div>
</body>
</html>
  `;
};