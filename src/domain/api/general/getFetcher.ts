import { publicRest } from "../config/api.config";

const getFetcher = async (route: string) => {
  const response = await publicRest.get(route);
  return response.data;
};

export default getFetcher;
