// const BASE_URL = "https://desafio-ecommerce-backend-nc.vercel.app/api";
const BASE_URL = "http://localhost:3001/api";

export async function fetchAPI(input?: RequestInfo, options?) {
  const url = BASE_URL + input;
  let res;

  const response = await fetch(url, options);
  res = response;

  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    console.log("data api: ", data);
    return data;
  } else {
    throw new Error(`Hubo un error ${res.status}: ${res.statusText}`);
  }
}

export async function searchProducts(product: string, offset: number) {
  if (product) {
    const foundProduct = await fetchAPI(
      `/search?q=${product}&limit=6&offset=${offset}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return foundProduct;
  }
}
