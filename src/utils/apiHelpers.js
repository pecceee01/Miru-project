import nodemailer from "nodemailer";

// Function to generate a random 5-digit OTP
export const generateOtp = () => {
  const otp = Math.floor(10000 + Math.random() * 90000).toString();
  return otp;
};

// Function to send OTP via email using Nodemailer
export const sendOtpMail = async (email, otp) => {
  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Beautiful HTML template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">
          
          <div style="background: linear-gradient(90deg, #007bff, #00c6ff); padding: 20px; text-align: center; color: #fff;">
            <h1 style="margin: 0;">Verification Code</h1>
          </div>

          <div style="padding: 30px; text-align: center;">
            <p style="font-size: 16px; color: #333;">Hello 👋,</p>
            <p style="font-size: 16px; color: #333;">Thank you for signing up! Please use the verification code below to complete your registration.</p>
            
            <div style="margin: 30px 0;">
              <span style="font-size: 36px; font-weight: bold; letter-spacing: 5px; color: #007bff;">${otp}</span>
            </div>

            <p style="font-size: 14px; color: #666;">This code will expire in <strong>10 minutes</strong>. If you did not request this, please ignore this email.</p>
            
            <div style="margin-top: 30px;">
              <a href="#" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px;">Verify Now</a>
            </div>
          </div>

          <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

    // Mail options
    const mailOptions = {
      from: `"Your App Name" <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject: "🔐 Your OTP Verification Code",
      html: htmlTemplate,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
