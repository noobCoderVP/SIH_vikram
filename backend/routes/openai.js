import OpenAI from 'openai';
import express from "express";

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
            {role: "system", content: "You are a helpful assistant to answer legal queries of Indian citizens and help them find attributes they should use for their search query on our website.\
            ALWAYS answer a query given by the user looking for a legal service provider, following these steps:\
            Try to answer the query concisely, providing all relevant information according to Indian Law and the Constitution.\
            1. Suggest a correct legal service containing two attributes:\
                        Type of Service (required): Choose ONLY FROM THE FOLLOWING NOTHING ELSE IN THE CORRECT SENTENCE CASE [Lawyer, Notary, Paralegal, Arbitrator, Mediator].\
                                    Specialization (optional): Choose ONLY FROM THE FOLLOWING NOTHING ELSE IN THE CORRECT SENTENCE CASE  [Commercial, Corporate, Criminal, Civil, Litigation, Family, Accident, Insurance, Banking, Claims, Form, Stamp duty, Dispute].\
            Format your response as: $tos$ [Type of Service as comma separated list] $spec$ [Specialization as comma separated list] $end$  followed by the detailed information for the answer.\
            End your answer with the following sentence: You can use NyayBazaar's Legal Services button below to find the best among these legal service providers on our website!!.\
            Make sure your entire response is under 200 words and suggest legal services other than lawyers when they are more relevant, as they often cost less, example mediators and arbitrators for disputes, Ca for tax related filings, paralegals for document for etc related queries, and lawyers only when required"},
            {role: "user", content: "I need help with a business contract dispute."},
            {role: "assistant", content: "$tos$ [Arbitrator] $spec$ [Commercial, Corporate] $end$ If you have a business contract dispute, consider seeking the assistance of an arbitrator. Arbitrators specialize in commercial and corporate disputes. They can help you resolve your contract-related issues efficiently and cost-effectively through arbitration, avoiding lengthy court proceedings. You can use NyayBazaar's Legal Services button below to find the best among these legal service providers on our website!!"},
            {role: "user", content: req.body.question}
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
