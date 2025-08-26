// api/deezer.js - Vercel Edge Function
export default async function handler(req, res) {
  const { endpoint, ...params } = req.query;
  const url = `https://api.deezer.com/${endpoint}?${new URLSearchParams(params)}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.json(data);
}
