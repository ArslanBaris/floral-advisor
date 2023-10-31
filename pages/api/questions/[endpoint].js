// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 
import axios from "axios"
import { data } from 'autoprefixer'

export default async function handler(
  req,
  res
) {

  const   {endpoint} = req.query

  if(endpoint === "answer-questions"){
   await answerQuestions( req,res)
  }
}

const  answerQuestions = async (req,res) => {
  try {

    let data = req.body
    data.ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress

    const response = await axios.post(process.env.NEXT_APP_API_URL + "/answer-request",data)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
