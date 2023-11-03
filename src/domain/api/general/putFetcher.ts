import { publicRest } from "../config/api.config";

const putFetcher = async (route: string, data: any) => {
  const response = await publicRest.put(route, data).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    return {
      ErrCode: errorCode,
      ErrMessage: errorMessage,
      HasError: true,
      data: {
        Status: errorCode,
        ErrMessage: errorMessage,
        HasError: true,
      },
    };
  });
  return response;
};

export default putFetcher;
