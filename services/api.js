const baseUrl = process.env.API_BACK || '"http://localhost:4000/"';

export const get = async (url) => {
  const response  = await fetch(baseUrl + url);
  const data = await response.json();
  return data
}

export const post = async (url, body) => {
  const config = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
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
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host':'hostName'
    },
    body: JSON.stringify(body)
  }
  const response  = await fetch(`${url}`, config);
  const data = await response.json();
  return data
}