// const ROOT_URL = "http://api.giphy.com/v1/gifs/search?";
// const API_KEY = "IYgRlVgzfHVNLpy1XEsunbC9Tya21NJQ";

async function getGiphy() {
  // const response = await fetch(`${ROOT_URL}${searchWord}api_key=${API_KEY}${limitNumber}&offset=0&rating=G&lang=en`)
  // return response.json();
  const response = await fetch(
    "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
  );
  return response.json().data;
}
export { getGiphy };
