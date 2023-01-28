function str2ab(str: string) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

async function getPemKey(key: string) {
  console.log("converting key to required format");
  const plainKey = key
    .replace("-----BEGIN RSA PRIVATE KEY-----", "")
    .replace("-----END RSA PRIVATE KEY-----", "")
    .replace(/(\r\n|\n|\r)/gm, "");
  console.log("Plain key", plainKey);
  const binaryKey = str2ab(atob(plainKey));
  console.log("Binary key generated", binaryKey);
  const signer = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    {
      name: "RSASSA-PKCS1-V1_5",
      hash: { name: "SHA-256" },
    },
    true,
    ["sign", "verify", "decrypt"]
  );
  console.log("Signer", await signer);
  return await signer;
}

export default getPemKey;
