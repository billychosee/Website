import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const data = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "billy@smatechgroup.com",
      subject: `New contact form submission from ${email}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Resend response:", data);
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending message." });
  }
}
