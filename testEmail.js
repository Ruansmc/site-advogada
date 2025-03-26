import "dotenv/config";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: "oseujuridico7@gmail.com",
      subject: "Teste de envio",
      text: "Este é um e-mail de teste enviado pelo Nodemailer.",
    });

    console.log("E-mail enviado com sucesso!", info);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
}

testEmail();
