import axios from "axios"
import { METHODS } from "http";

export async function sendText(text: any): Promise<Object>{
    // let data: object = {};
    const {data} = await axios.post(
      "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism/",
      {
        text: text,
        language: "en",
        includeCitations: false,
        scrapeSources: false,
      },
      {
        headers: {
            "Content-Type" : 'application/json',
            "X-RapidAPI-Key": "a35f127b5emshf9ed3ae7b851ea0p122669jsn568cb9930287"
        }
      }
    )
  
    return data
}