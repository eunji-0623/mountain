import axios from 'axios';

export default defineEventHandler(async (event) => {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_DATABASE_ID;

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  // SQL 조회
  const res = await axios.post(
    url,
    { sql: 'SELECT * FROM Mountain ORDER BY id DESC' },
    { headers }
  );

  return res.data.result;
});
