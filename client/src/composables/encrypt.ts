import { ref } from "vue";

export interface EncryptionData {
  text: string,
  cipher: string,
  params: Object,
}

export async function useEncrypt(data: EncryptionData) : Promise<string> {
  // console.log(`encryption data:\ntext: ${data.text}\ncipher: ${data.cipher}\nparams: ${data.parameters}`)
  
  const response = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res => console.log(res));
  
  return 'sth';
}