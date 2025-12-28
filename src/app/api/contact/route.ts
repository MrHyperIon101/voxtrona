import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, platform, version, steps, expected, actual } = body;

        // Validate env variables
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP credentials");
            return NextResponse.json(
                { error: "Server configuration error: Missing SMTP credentials" },
                { status: 500 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'mrhyperionai@gmail.com',
            subject: `[Bug Report] ${name} - ${platform}`,
            text: `
New Bug Report Received:

SUBMITTER INFO
Name: ${name}
Email: ${email}

DEVICE INFO
Platform: ${platform}
Version: ${version}

DETAILS
Steps to Reproduce:
${steps}

Expected Behavior:
${expected}

Actual Behavior:
${actual}

Timestamp: ${new Date().toISOString()}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Bug Report</h2>
          <hr style="border: 1px solid #ccc;" />
          
          <h3>Submitter Info</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <h3>Device Info</h3>
          <p><strong>Platform:</strong> ${platform}</p>
          <p><strong>Version:</strong> ${version}</p>

          <h3>Details</h3>
          <p><strong>Steps to Reproduce:</strong><br/>${steps?.replace(/\n/g, '<br/>')}</p>
          <p><strong>Expected Behavior:</strong><br/>${expected?.replace(/\n/g, '<br/>')}</p>
          <p><strong>Actual Behavior:</strong><br/>${actual?.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, id: `BUG-${Date.now().toString().slice(-4)}` });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
