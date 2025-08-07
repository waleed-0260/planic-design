import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/MongoDb";
import { connectDB } from "@/lib/Mongodb";
// import cloudinary from "@/lib/cloudinary"; 
import cloudinary from "@/lib/Cloudinary";
// import { Portfolio } from "@/models/portfolio";
import {contact} from "@/models/contacts"
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {

  const { name, email, message, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'planicdesignisb@gmail.com', // destination
    subject: 'New Contact Form Submission',
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await connectDB(); // optional, if you want to store data
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const products = await contact.find({}); // or with filters
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}