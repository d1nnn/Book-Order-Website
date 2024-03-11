import axios from "axios";

var generatePassword = (
  length = 24,
  characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => characters[x % characters.length])
    .join("");

// export const url = "https://fingertips.com.pk/api/paige";
// export const url = "https://babook17-6it6ur392-seisr.vercel.app";
// export const url = "https://babook17-1gghhr8jq-seisr.vercel.app";
export const url = "https://babook17-o8hlknxrx-seisr.vercel.app/";

export const is_authorzied = async (token = null) => {
  if (!token) {
    token = sessionStorage.getItem("accessToken");
  }
  try {
    const response = await axios.post(
      `${url}/auth/verify`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.status == 200;
  } catch (error) {
    return false;
  }
};

export const get_header = async () => {
  const Token = sessionStorage.getItem("accessToken");
  if (await is_authorzied(Token)) return { Authorization: `Bearer ${Token}` };

  let Session = sessionStorage.getItem("sessionID");
  if (!Session) {
    Session = generatePassword();
    sessionStorage.setItem("sessionID", Session);
  }
  return { "Session-ID": `${Session}` };
};
