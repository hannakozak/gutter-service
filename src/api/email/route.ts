import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
	const formData = await request.formData();
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MY_EMAIL,
			pass: process.env.MY_PASSWORD,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.MY_EMAIL,
		to: process.env.MY_EMAIL,
		subject: `Message from ${name} (${email})`,
		text: message,
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve("Email sent");
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return NextResponse.json({ message: "Email sent" });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
