import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

export const showLoading = (message: string = "Cargando...") => {
  MySwal.fire({
    title: <p>{message}</p>,
    didOpen: () => {
      MySwal.showLoading();
    },
  });
};

export const showSuccessMessage = (message: string) => {
  MySwal.fire({ title: <p>{message}</p>, icon: "success" });
};

export const showErrorMessage = (message: string) => {
  MySwal.fire({ title: <p>{message}</p>, icon: "error" });
};
