import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env.local
dotenv.config();

// Configura a API Key do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(firstName, email, message) {
  const msg = {
    to: "oseujuridico7@gmail.com", // Cliente que receberá os e-mails
    from: process.env.EMAIL_USER, // E-mail do remetente autenticado
    subject: `Nova mensagem de ${firstName}`,
    html: `
      <p><strong>Nome:</strong> ${firstName}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("E-mail enviado com sucesso!");
    return { success: true };
  } catch (error) {
    console.error(
      "Erro ao enviar e-mail:",
      error.response?.body || error.message
    );
    return { success: false, error: error.message };
  }
}
