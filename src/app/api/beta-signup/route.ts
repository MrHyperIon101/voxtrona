import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, platform, device, reason, audioSetup, audioGear, preferredQuality, interestedFeatures } = body;

        // Validate required fields
        if (!email || !platform) {
            return NextResponse.json(
                { error: "Email and platform are required" },
                { status: 400 }
            );
        }

        // Validate env variables
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP credentials");
            return NextResponse.json(
                { error: "Server configuration error" },
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

        const platformLabel = platform === 'windows' ? 'Windows' : 'Smart TV';
        const signupId = `BETA-${Date.now().toString().slice(-6)}`;

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'mrhyperionai@gmail.com',
            subject: `[Beta Signup] ${platformLabel} - ${email}`,
            text: `
New Beta Signup for Voxtrona ${platformLabel}

SIGNUP ID: ${signupId}

CONTACT INFO
Email: ${email}
Name: ${name || 'Not provided'}

PLATFORM INFO
Platform: ${platformLabel}
Device: ${device || 'Not specified'}

MUSIC PROFILE
Current Setup: ${audioSetup || 'Not provided'}
Audio Gear: ${audioGear || 'Not provided'}
Preferred Quality: ${preferredQuality || 'Not provided'}
Interested In: ${interestedFeatures && interestedFeatures.length > 0 ? interestedFeatures.join(', ') : 'Not specified'}

MOTIVATION
${reason || 'No reason provided'}

Timestamp: ${new Date().toISOString()}
      `,
            html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 28px; margin: 0; background: linear-gradient(90deg, #a855f7, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Voxtrona Beta Signup</h1>
            <p style="color: #888; margin-top: 8px;">${platformLabel} Platform</p>
          </div>
          
          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h3 style="color: #a855f7; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Signup ID</h3>
            <p style="font-size: 20px; font-weight: bold; margin: 0; font-family: monospace;">${signupId}</p>
          </div>

          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h3 style="color: #3b82f6; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Contact Info</h3>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Name:</strong> ${name || '<span style="color: #666;">Not provided</span>'}</p>
          </div>

          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h3 style="color: #22c55e; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Platform Info</h3>
            <p style="margin: 0 0 8px 0;"><strong>Platform:</strong> ${platformLabel}</p>
            <p style="margin: 0;"><strong>Device:</strong> ${device || '<span style="color: #666;">Not specified</span>'}</p>
          </div>

          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h3 style="color: #8b5cf6; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Music Profile</h3>
            <p style="margin: 0 0 8px 0;"><strong>Audio Setup:</strong> ${audioSetup || '<span style="color: #666;">Not provided</span>'}</p>
            <p style="margin: 0 0 8px 0;"><strong>Audio Gear:</strong> ${audioGear || '<span style="color: #666;">Not provided</span>'}</p>
            <p style="margin: 0 0 8px 0;"><strong>Preferred Quality:</strong> ${preferredQuality || '<span style="color: #666;">Not provided</span>'}</p>
            <p style="margin: 0;"><strong>Interested Features:</strong> ${interestedFeatures && interestedFeatures.length > 0 ? interestedFeatures.join(', ') : '<span style="color: #666;">Not specified</span>'}</p>
          </div>

          ${reason ? `
          <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h3 style="color: #f59e0b; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Motivation</h3>
            <p style="margin: 0; white-space: pre-wrap;">${reason.replace(/\n/g, '<br/>')}</p>
          </div>
          ` : ''}

          <p style="text-align: center; color: #666; font-size: 12px; margin-top: 24px;">
            Submitted on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, id: signupId });
    } catch (error) {
        console.error('Beta signup error:', error);
        return NextResponse.json(
            { error: "Failed to submit signup. Please try again." },
            { status: 500 }
        );
    }
}
