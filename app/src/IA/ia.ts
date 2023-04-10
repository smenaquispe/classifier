import { ResultInterface } from "../shared/result.interface";
import examples from "./examples";

export const classify = async (input : string) => {

     const url = import.meta.env.VITE_COHERE_SUMMIRIZE_URL,
     api_key = import.meta.env.VITE_COHERE_APY_KEY
     
     const data = {
          "model": "large",
          "inputs": [input],
          "examples" : examples     
     }

     try {
          const response = await fetch(url!, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `BEARER ${ api_key! }`,
               },
               body: JSON.stringify(data),
          })
          
          const json  = await response.json()
          const classification = json.classifications[0].labels
          
          let higher = 0, currentTopic = ''
          for(const topic in classification)
               if(classification[topic].confidence > higher){
                    currentTopic = topic
                    higher = classification[currentTopic].confidence
               }

          const result : ResultInterface = {
               topic: currentTopic,
               confidence: higher
          }
          return result;
     } catch (error) {
          console.log(error)
          return null
     }

}
