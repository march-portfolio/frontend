import axios from "axios";

const url = 'http://myAPI.com'
const url2 = 'https://formsubmit.co/march.creative27@email.com'

export async function TestAPI(body: unknown){
  try{
    const response = await axios.post(`${url2}`,body)     
    return response.data
}
catch(err:any){
  return err.response.data.message
}
   
}
export async function PostAPI(path:string,body: unknown){
  try{
    const response = await axios.post(`${url}${path}`,body)     
    return response.data
}
catch(err:any){
  return err.response.data.message
}
   
}