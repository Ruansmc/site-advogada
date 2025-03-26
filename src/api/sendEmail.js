import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { firstName, lastName, email, tel, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Pode ser outro provedor (Outlook, SMTP externo)
    auth: {
      user: process.env.EMAIL_USER, // E-mail do remetente
      pass: process.env.EMAIL_PASS, // Senha ou App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ruanmota2009@gmail.com", // E-mail que receberá as mensagens
    subject: "Novo Contato pelo Formulário",
    text: `
      Nome: ${firstName} ${lastName}
      E-mail: ${email}
      Telefone: ${tel}
      Mensagem: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar e-mail", details: error });
  }
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Extrair os dados do formulário e criar um objeto JSON
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Enviar os dados via fetch para o backend
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Passando os dados como JSON
    });

    if (response.ok) {
      alert("E-mail enviado com sucesso!");
    } else {
      alert("Erro ao enviar e-mail.");
    }
  } catch (error) {
    alert("Erro ao enviar a requisição.");
  }
});
