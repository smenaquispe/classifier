const COHERE_APY_KEY = "ii8EjtvESpDo2NJ3smwRpPetRVgbQqGX2mtcelnt";

export const summarize = async (input : string) => {
     const COHERE_CLASSIFY_URL = " https://api.cohere.ai/summarize",
     data = {
          "length": "medium",
          "format": "paragraph",
          "model": "summarize-xlarge",
          "extractiveness": "low",
          "temperature": 0.3,
          "text" : input
     }


     const response = await fetch(COHERE_CLASSIFY_URL, {
          method: "POST",
          headers: {
               Accept: "application/json",
               Authorization: `Bearer ${COHERE_APY_KEY}`,
               "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        })

     return response.json();
}
