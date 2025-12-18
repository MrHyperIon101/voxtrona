import { NextRequest, NextResponse } from "next/server";
import { addBugReport, listBugReports } from "@/lib/store";
import nodemailer from "nodemailer";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      name = "",
      email = "",
      platform = "",
      version = "",
      contact = "",
      steps = "",
      expected = "",
      actual = "",
    } = body || {};

    if (!actual || !steps) {
      return NextResponse.json({ error: "Please provide steps and actual behavior." }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") || undefined;
    const created = await addBugReport({ name, email, platform, version, steps, expected, actual, userAgent });

    // Send email notification to developer
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured");
    } else {
      try {
        const info = await transporter.sendMail({
          from: `"Voxtrona Bug Reports" <${process.env.EMAIL_USER}>`,
          to: "mrhyperionai@gmail.com",
          subject: `🐛 Bug Report: ${platform || "Unknown Platform"} - ${version || "No Version"}`,
          html: `
            <h2>New Bug Report Submitted</h2>
            <p><strong>Report ID:</strong> ${created.id}</p>
            <p><strong>Submitted:</strong> ${new Date(created.createdAt).toLocaleString()}</p>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

            <h3>Reporter Information</h3>
            <p><strong>Name:</strong> ${name || "Not provided"}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Contact:</strong> ${contact || "Not provided"}</p>

            <h3>System Information</h3>
            <p><strong>Platform:</strong> ${platform || "Not provided"}</p>
            <p><strong>Version:</strong> ${version || "Not provided"}</p>
            <p><strong>User Agent:</strong> ${userAgent || "Not provided"}</p>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

            <h3>Bug Details</h3>

            <h4>Steps to Reproduce:</h4>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; white-space: pre-wrap;">${steps}</pre>

            <h4>Expected Behavior:</h4>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; white-space: pre-wrap;">${expected || "Not provided"}</pre>

            <h4>Actual Behavior:</h4>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px; white-space: pre-wrap;">${actual}</pre>
          `,
        });
        console.log("Email sent successfully:", info.messageId);
      } catch (emailError: any) {
        console.error("Failed to send email notification:", emailError);
        console.error("Error details:", emailError.message);
        // Continue even if email fails - bug report is still saved
      }
    }

    return NextResponse.json({ ok: true, id: created.id, createdAt: created.createdAt }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to create bug report" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Optional simple protection via admin key in query
  const { searchParams } = new URL(req.url);
  const adminKey = searchParams.get("adminKey");
  const expected = process.env.ADMIN_KEY;
  if (expected && adminKey !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const list = await listBugReports();
    return NextResponse.json({ ok: true, reports: list });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to load bug reports" }, { status: 500 });
  }
}
