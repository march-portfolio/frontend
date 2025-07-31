import axios from "axios";

const url = "https://marchtanu-api.onrender.com";
// const url2 = 'https://formsubmit.co/march.creative27@email.com'

export async function TestAPI(body: any) {
  try {
    const response = await axios.post(`${url}`, body);
    return response.data;
  } catch (err: any) {
    return err.data.message;;
  }
}
export async function PostAPI(path: string, body: any) {
  try {
    const response = await axios.post(`${url}${path}`, body);
    return  response;
  } catch (err: any) {
    return err.response.data.message;
  }
}

export async function GetAPI(path: string) {
  try {
    const response = await axios.get(`${url}${path}`);
    return  response.data;
  } catch (err: any) {
    return err.data.message;;
  }
}
