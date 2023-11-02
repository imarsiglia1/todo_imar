import { publicRest } from "../config/api.config";

const getFetcher = async (route: string, data: any) => {
  const response = await publicRest.get(route, data);
  return response.data;
};

export default getFetcher;
