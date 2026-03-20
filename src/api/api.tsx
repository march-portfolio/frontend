import axios from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://marchtanu-api.up.railway.app";

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
    const errorMessage =
      err.response?.data?.message || err.message || "An error occurred";
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
    console.log("SendEmailAPI called (mocked):", formData);
    // Returning a mock success response
    return { message: "Email sending simulated successfully." };

    /*
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    return await response.json();
    */
  } catch (err: any) {
    console.error("Email API Error:", err);
    throw err;
  }
}
