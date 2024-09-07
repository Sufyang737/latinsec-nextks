import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const data = await resend.emails.send({
      from: "Latinsec <onboarding@resend.dev>",
      to: ["alevilella@latinsec.com"],
      subject: "Nuevo mensaje desde web Latinsec",
      react: EmailTemplate({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
      text: "",
    });

    return NextResponse.json({ message: "Mensaje enviado" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error al enviar mensaje" });
  }
}
