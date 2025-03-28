const sgMail = require("@sendgrid/mail");

// Defina a chave de API do SendGrid no Vercel, sem expô-la no código
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, telefone, message } = req.body;

    const msg = {
      to: "ruanmota2009@gmail.com", // Aqui você coloca o e-mail de destino (não a URL)
      from: "ruanmota2009@gmail.com", // Aqui o e-mail que será usado para enviar
      subject: "Nova Mensagem do Formulário de Contato",
      text: `
        Nome: ${firstName} ${lastName}
        Email: ${email}
        Telefone: ${telefone}
        Mensagem: ${message}
      `,
      html: `
        <strong>Nome:</strong> ${firstName} ${lastName}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Telefone:</strong> ${telefone}<br />
        <strong>Mensagem:</strong> ${message}
      `,
    };

    try {
      const response = await sgMail.send(msg);
      console.log("Response from SendGrid:", response); // Log da resposta
      return res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
      console.error(
        "Error from SendGrid:",
        error.response ? error.response.body : error.message
      );
      return res.status(500).json({ error: "Erro ao enviar o e-mail" });
    }
  }
}
