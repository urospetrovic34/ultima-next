const api_url = process.env.API_URL;
const api_key = process.env.API_KEY;

export const get = (path: string) => {
  return fetch(`${api_url}${path}`, {
    method: "GET",
    headers: {
      apiKey: `${api_key}`,
      Authorization: `Bearer ${api_key}`,
    },
    next: { tags: ["user"], revalidate: 2 },
  });
};

export const post = (path: string, body: any) => {
  return fetch(`${api_url}${path}`, {
    method: "POST",
    headers: {
      apiKey: `${api_key}`,
    },
    next: { tags: ["user"], revalidate: 2 },
    body: JSON.stringify(body),
  });
};
