import { publicRest } from "../config/api.config";

const postFetcher = async (route: string, data: any) => {
  const response = await publicRest.post(route, data).catch((error) => {
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

export default postFetcher;
