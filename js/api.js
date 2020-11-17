const BASE_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_URL}/hotels`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } catch (error) {}
};

export const getAllHotels = async () => {
  const rawRes = await baseRequest({ method: "GET" });
  return await rawRes.json();
};

export const postHotels = (body) => baseRequest({ method: "POST", body });

export const updateHotels = (body) => baseRequest({ method: "PUT", body });

export const deleteHotels = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });
