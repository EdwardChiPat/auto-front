import { post } from "../../services/api"

export default async function handler (req, res) {
  if(req.method === "POST"){
    const data = await post('pay/sendPayment', req.body)
    console.log("data", data, req.body)
    res.status(200).json(data)
  }
}