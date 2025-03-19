import axios from "axios";

const url = 'http://myAPI.com'

export async function PostAPI(path:string,body: any){
  try{
    const response = await axios.post(`${url}${path}`,body)     
    return response.data
}
catch(err:any){
  return err.response.data.message
}
   
}