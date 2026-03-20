import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Standardized API call utility.
 */
async function apiCall(method: "get" | "post", path: string, body?: any) {
  try {
    const response = await axios({
      method,
      url: `${apiUrl}${path}`,
      data: body,
    });
    return response;
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || err.message || "An error occurred";
    console.error(`API Error (${method.toUpperCase()} ${path}):`, errorMessage);
    throw new Error(errorMessage);
  }
}

export async function TestAPI(body: any) {
  const response = await apiCall("post", "", body);
  return response.data;
}

export async function PostAPI(path: string, body: any) {
  return await apiCall("post", path, body);
}

export async function GetAPI(path: string) {
  const response = await apiCall("get", path);
  return response.data;
}

/**
 * SendEmailAPI should be called from the server side or a Server Action
 * to avoid exposing the Resend API key.
 */
export async function SendEmailAPI(formData: any) {
  try {
    // Note: In Next.js App Router, you should probably move this to a Server Action
    // or an API route (e.g., /api/send-email) to keep the RESEND_API_KEY secure.
    // For now, I'm just fixing the utility to use the environment variable.
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (err: any) {
    console.error("Email API Error:", err);
    throw err;
  }
}
