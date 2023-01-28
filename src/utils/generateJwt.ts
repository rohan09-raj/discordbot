function str2ab(str: string) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function arrayBufferToBase64Url(buffer: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export default async function generateJwt(data: string, signer: CryptoKey) {
  const buf = str2ab(data);
  const binarySignature = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-V1_5" },
    signer,
    buf
  );
  return arrayBufferToBase64Url(binarySignature);
}
