import nodemailer from "nodemailer"
export const generateOtp = () => {
    const otp = Math.floor(10000 + Math.random() * 90000).toString()
    return otp
}

// Function to send OTP via email using nodemailer
function sendOTPByEmail(email, otp) {
  try{
    
    // Create a nodemailer transporter with your email service settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use the email service you prefer
      port: 465,
      auth: {
        user: process.env.EMAIL_USERNAME,  
        pass: process.env.EMAIL_PASSWORD, 
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
     
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Verification Code for Registration',
      text: `Your OTP (One-Time Password) for registration is: ${otp}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
  catch(error){
    console.log(error)
  }
}

// email template
const otpTemplate = (otp) => `
  <div style="font-family: Arial, sans-serif; background: #f5f7fa; padding: 20px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <table width="500" border="0" cellspacing="0" cellpadding="0" 
            style="background: #ffffff; padding: 30px; border-radius: 10px;">
            
            <tr>
              <td align="center">
                <h2 style="color: #333; margin-bottom: 10px;">
                   Verification Code
                </h2>
                <p style="color: #555; font-size: 15px;">
                  Use the OTP below to complete your verification.
                </p>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding: 20px 0;">
                <div style="
                  font-size: 32px;
                  font-weight: bold;
                  letter-spacing: 6px;
                  color: #1a73e8;
                ">
                  ${otp}
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <p style="color: #555; font-size: 14px; line-height: 22px;">
                  This code will expire in <strong>10 minutes</strong>.  
                  If you did not request this code, please ignore this email.
                </p>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding-top: 25px;">
                <p style="font-size: 12px; color: #888;">
                  © ${new Date().getFullYear()} Miruschool. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
`;

// Function to send OTP via email using nodemailer
export const sendOtpMail=(email, otp)=> {
  try{
    
    // Create a nodemailer transporter with your email service settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use the email service you prefer
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,  
        pass: process.env.EMAIL_PASSWORD, 
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
     
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: 'Verification Code for Registration',
     html: otpTemplate(otp), // send styled HTML
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
  catch(error){
    console.log(error)
  }
}

