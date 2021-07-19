import axios from "axios";

const API_KEY = "307f2146-e8ec-4535-877d-8dd0414e7764";
const Axios = axios.create({
  baseURL: `https://getpantry.cloud/apiv1/pantry/${API_KEY}`,
});

export default Axios;
