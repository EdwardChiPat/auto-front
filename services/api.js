const baseUrl = process.env.API_BACK || '"http://localhost:4000/"';

export const get = async (url) => {
  const response  = await fetch(baseUrl + url);
  const data = await response.json();
  return data
}

export const post = async (url, body) => {
  console.log("data2",body)
  const config = {
    method: 'POST',
    headers: {
      "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      'Accept': 'application/json; charset=UTF-8',
      'Content-Type': 'application/json',
      'Host':'hostName'
    },
    body: JSON.stringify(body)
  }
  const response  = await fetch(`${baseUrl}${url}`, config);
  const data = await response.json();
  return data
}

export const postApi = async (url, body) => {
  const config = {
    method: 'POST',
    headers: {
      "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      'Accept': 'application/json; charset=UTF-8',
      'Content-Type': 'application/json',
      'Host':'hostName'
    },
    body: JSON.stringify(body)
  }
  const response  = await fetch(`${url}`, config);
  const data = await response.json();
  return data
}