import { ref } from "vue";

export interface EncryptionData {
  text: string,
  cipher: string,
  params: Object,
}

export async function useEncrypt(data: EncryptionData) : Promise<string> {
  const response = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res => res.json().then());
  
  return response.result;
}