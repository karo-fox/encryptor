import { ref } from "vue";

export interface EncryptionData {
  text: string,
  cipher: string,
  parameters: Object,
}

export function useEncrypt(data: EncryptionData) {
  console.log(`encryption data:\ntext: ${data.text}\ncipher: ${data.cipher}\nparams: ${data.parameters}`)
}