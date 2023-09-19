import OpenAI from 'openai';
import express from "express";

const aiRouter = express.Router();

// Configure OpenAI API
const openai = new OpenAI(
    {
        apiKey: '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'
    }
);

aiRouter.post('/ai', async (req, res)=> {   
    try {
      const resp = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: "You are a helpful assistant to answer legal queries of Indian citizens and help them find best lawyers suitable from nyaybazaar.com. Only if the query given by the user seems to be looking for a legal service provider, suggest a correct legal solution containing two attributes : Type of Service and Specialization. Type of Service can be one among the following : [lawyer, notary, paralegal, arbitrator, mediator]. Specialization can be one or more among [commercial, corporate, criminal, civil, litigation, family, accident, insurance, banking, claims] for lawyer and [form, stampduty, dispute] if not lawyer "},
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