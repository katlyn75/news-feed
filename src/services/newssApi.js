
const KEY = 'fb4c4673400a4afbb04a5b318aead7fc';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?sources?&apiKey=${KEY}`;

const storage = window.localStorage;

export function searchNews(searchTerm) {
  const url = `${NEWS_URL}&q=${searchTerm}&maxResults=25`;
  //show top 25 results

  const data = storage.getItem(url);
  if(data) return Promise.resolve(JSON.parse(data));

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });
}

