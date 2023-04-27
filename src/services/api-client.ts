import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d481188cb8941c5937082677cc68af7",
  },
});
