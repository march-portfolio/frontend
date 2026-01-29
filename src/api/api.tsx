import axios from "axios";
import { Resend } from "resend";

const resend = new Resend("re_WsbVitZu_GiM2N5yhVy8CxzeZZhCbEZ32");
const url = "https://marchtanu-api.up.railway.app";
// const url2 = 'https://formsubmit.co/march.creative27@email.com'

export async function TestAPI(body: any) {
  try {
    const response = await axios.post(`${url}`, body);
    // console.log(response);
    return response.data;
  } catch (err: any) {
    // console.log(err);
    return err.data.message;
  }
}
export async function PostAPI(path: string, body: any) {
  try {
    const response = await axios.post(`${url}${path}`, body);
    // console.log(response);
    return response;
  } catch (err: any) {
    return err.response.data.message;
  }
}

export async function GetAPI(path: string) {
  try {
    const response = await axios.get(`${url}${path}`);
    // console.log(response);
    return response.data;
  } catch (err: any) {
    return err.data.message;
  }
}

export async function SendEmailAPI(body: any) {
  try {
    const response = await resend.emails.send({
      from: body.email,
      to: ["march.creative27@gmail.com"],
      subject: body.reason,
      html: body,
    });
    return response;
  } catch (err: any) {
    return err.data.message;
  }
}
