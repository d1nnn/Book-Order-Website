import axios from "axios";

var generatePassword = (
  length = 24,
  characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => characters[x % characters.length])
    .join("");

export const url = "https://fingertips.com.pk/api/paige";
export const get_header = async () => {
  const Token = sessionStorage.getItem("accessToken");
  if (Token) {
    const _headers = { Authorization: `Bearer ${Token}` };
    const response = await axios.post(
      `${url}/auth/verify`,
      {},
      { headers: _headers }
    );
    if (response.status == 200) return _headers;
  }
  let Session = sessionStorage.getItem("sessionID");
  if (!Session) {
    Session = generatePassword();
    sessionStorage.setItem("sessionID", Session);
  }
  return { "Session-ID": `${Session}` };
};
