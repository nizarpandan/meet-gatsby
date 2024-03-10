// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { env } from '$env/dynamic/private';
// import { json, type RequestHandler } from '@sveltejs/kit';
// // You may want to replace the above with a static private env variable
// // for dead-code elimination and build-time type-checking:
// // import { OPENAI_API_KEY } from '$env/static/private'
 

 
// // Create an OpenAI API client
// const openai = new OpenAI({
//   apiKey: '',
// });

// const genAI = new GoogleGenerativeAI('');


// export const POST: RequestHandler = async ({ request }) => {
//   // const model = genAI.getGenerativeModel({ model: "gemini-pro"});
//   // const prompt = "hi";
//   // const result = await model.generateContent(prompt);
//   // const response = await result.response;
//   // const text = response.text();
//   // console.log(response);
//   streaming();
// 	const { a, b } = await request.json();
// 	return json(a + b);
// };

// async function streaming() {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});
//   const prompt = "Write a story about a magic backpack.";
//   const result = await model.generateContentStream([prompt]);

//   let text = '';
//   for await (const chunk of result.stream) {
//     const chunkText = chunk.text();
//     console.log(chunkText);
//     text += chunkText;
//   }
// }