import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//     'X-RapidAPI-Key': '33d4bf875fmsh2d786711ce0d388p170914jsn2f8fc0f0d38f',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "33d4bf875fmsh2d786711ce0d388p170914jsn2f8fc0f0d38f",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return response.data;
};
