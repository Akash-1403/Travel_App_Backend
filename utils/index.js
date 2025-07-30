
import CryptoJS from "crypto-js";

export const encryptText = (password,secretKey)=>{
  // Encrypt
return CryptoJS.AES.encrypt(password,secretKey).toString();

}

export const decryptText = (password,secretKey) =>{
  const bytes  = CryptoJS.AES.decrypt(password, secretKey);
const  originalText = bytes.toString(CryptoJS.enc.Utf8);
return originalText;
}