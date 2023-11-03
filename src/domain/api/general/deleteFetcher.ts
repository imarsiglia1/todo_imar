import { publicRest } from "../config/api.config";

const deleteFetcher = async (route: string) => {
  const response = await publicRest.delete(route).catch((error) => {
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

export default deleteFetcher;
