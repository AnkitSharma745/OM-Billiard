import emailjs from "emailjs-com";

// Service and template IDs for admin and user emails
const SERVICE_ID = "service_le3gomv"; // Your service ID
const ADMIN_TEMPLATE_ID = "template_khgcmoe"; // Admin email template ID
const USER_TEMPLATE_ID = "template_1fxcnew"; // Thank-you email template ID
const PUBLIC_KEY = "g6nJ18KZwZ1ErDTHk"; // Your public key

type EmailPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  address?: string;
};

export const sendEmails = async ({
  firstName,
  lastName,
  email,
  phone,
  message,
  address,
}: EmailPayload) => {
  try {
    // Sending email to admin
    const adminResponse = await emailjs.send(
      SERVICE_ID,
      ADMIN_TEMPLATE_ID,
      { firstName, lastName, email, phone, message: message ?? address },
      PUBLIC_KEY
    );
    console.log("Admin email sent successfully:", adminResponse);

    // Sending thank-you email to user
    const userResponse = await emailjs.send(
      SERVICE_ID,
      USER_TEMPLATE_ID,
      { email, firstName },
      PUBLIC_KEY
    );
    console.log("Thank-you email sent successfully:", userResponse);

    // Return success status
    return {
      success: true,
      message: "Emails sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send emails:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);

    // Return error status
    return {
      success: false,
      message: `Failed to send emails: ${errorMessage}`,
    };
  }
};
