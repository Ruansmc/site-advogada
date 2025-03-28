require("dotenv").config(); // Carrega variáveis do .env
const express = require("express");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");

// Defina a chave de API do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware para lidar com requisições JSON

app.post("/api/sendEmail", async (req, res) => {
  const { firstName, lastName, email, telefone, message } = req.body;

  const msg = {
    to: "ruanmota2009@gmail.com", // E-mail do destinatário
    from: "ruanmota2009@gmail.com", // E-mail que está enviando (pode ser qualquer e-mail verificado no SendGrid)
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
    console.log("Response from SendGrid:", response);
    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(
      "Error from SendGrid:",
      error.response ? error.response.body : error.message
    );
    return res.status(500).json({ error: "Erro ao enviar o e-mail" });
  }
});

app.listen(port, () => {
  console.log(`Servidor local rodando na porta ${port}`);
});
