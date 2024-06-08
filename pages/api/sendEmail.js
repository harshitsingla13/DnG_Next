import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, mobile, orderType, orderDetail } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const messageTemplate = () => {
      return `Mobile Number:- ${mobile}
        Order Type:- ${orderType}
        Order Details:- ${orderDetail}`;
    };

    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: "dngbakersandkitchen@gmail.com",
      subject: `New enquiry from ${name}`,
      text: messageTemplate(),
    });

    res.status(200).json({ status: "Ok" });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
