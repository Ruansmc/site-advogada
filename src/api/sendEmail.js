import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configura a chave API do SendGrid com a variável de ambiente
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { firstName, email, message } = req.body;

  if (!process.env.SENDGRID_API_KEY) {
    return res.status(500).json({ error: "Configuração de e-mail inválida" });
  }

  const msg = {
    to: "ruanmota2009@gmail.com", // Destinatário
    from: process.env.EMAIL_USER, // Seu e-mail configurado no SendGrid
    subject: `Nova mensagem de ${firstName}`,
    html: `
      <p><strong>Nome:</strong> ${firstName}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg); // Envia o e-mail usando o SendGrid
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: error.message });
  }
}
