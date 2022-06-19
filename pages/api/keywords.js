import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const {
    prompt,
    temperature,
    maxTokens,
    topP,
    frequencyPenalty,
    presencePenalty,
    text,
  } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt + text,
    temperature: temperature,
    max_tokens: maxTokens,
    top_p: topP,
    frequency_penalty: frequencyPenalty,
    presence_penalty: presencePenalty,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
