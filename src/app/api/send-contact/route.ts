import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.yandex.ru",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || "УралСтройДерево <info@uralstroyderevo.ru>",
      to: process.env.EMAIL_TO || "info@uralstroyderevo.ru",
      subject: `Новая заявка от ${name}`,
      text: `
Имя: ${name}
Телефон: ${phone}
Email: ${email}
Сообщение: ${message}
      `,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Не указан"}</p>
        <p><strong>Сообщение:</strong><br/>${message || "Не указано"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Заявка успешно отправлена" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return NextResponse.json(
      { message: "Ошибка отправки" },
      { status: 500 }
    );
  }
}
