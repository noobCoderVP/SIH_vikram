import OpenAI from 'openai';
import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const aiRouter = express.Router();

// Configure OpenAI API
const openai = new OpenAI(
    {
        apiKey: process.env.API_KEY
    }
);

aiRouter.post('/ai', async (req, res)=> {   
    try {
      const resp = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: "You are a helpful assistant to answer legal queries of Indian citizens and help them find attributes they should use for their search query on our website. First try to answer the query concisely but provide all relevant information that you know to be true according to Indian Law and Constitution. Only if the query given by the user seems to be looking for a legal service provider, suggest a correct legal solution containing two attributes : Type of Service : required and Specialization: optional. Type of Service can be one or more among the following : [lawyer, notary, paralegal, arbitrator, mediator]. Specialization can be one or more among [commercial, corporate, criminal, civil, litigation, family, accident, insurance, banking, claims,form, stampduty, dispute]. Include these two attributes only in the last line of your answer along with the following sentence, you can use nyaybazaars Legal Services button above to filter the legal service providers on our website using these tags !! Bold the tags you return and the Legal Services button text. Make sure your entire repsonse is under 200 words and try to suggest legal services other than lawyer if they are more relevant since they cost lesser than lawyers. "},
            {role: "user", content: req.body.question},
            // {role: "assistant", content: "Provide a solution for the problem posed by the user"},
            // {role: "assistant", content: "Provide just the attributes in above solution"}
          ]  
      })              
      res.status(200).json({message: resp.choices[0].message.content})
      console.log(resp.choices[0].message.content)
    } catch(e) {
        res.status(400).json({message: e.message})
    }
});

export default aiRouter;
