import { useForm } from "react-hook-form";
import CustomModal from "../../components/general/CustomModal";
import CustomInput from "../../components/input/CustomInput";
import useModal from "../../hooks/useModal";
import { useCreateTask, useTaskAll } from "../../hooks/useTask";

type FormInputs = {
  title: string;
  description: string;
};

const HomePage = () => {
  const { data, isFetching, refetch } = useTaskAll();
  const { mutateAsync, isLoading } = useCreateTask();
  const { visible, openModal, closeModal } = useModal();
  const { register, handleSubmit } = useForm<FormInputs>();

  const onCreate = async (data: FormInputs) => {
    await mutateAsync(data);
    refetch();
  };

  if (isFetching || !data) {
    return <></>;
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        Nueva tarea
      </button>

      {data.map((item, index) => (
        <div key={index}>
          <label>{item.title}</label>
        </div>
      ))}

      <CustomModal visible={visible} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onCreate)}>
          <CustomInput
            className="input_text"
            placeholder="Título"
            {...register("title", { required: true })}
          />

          <br />
          <CustomInput
            className="input_text"
            placeholder="Descripción"
            {...register("description")}
          />
          <br />
          <button type="submit">Guardar</button>
        </form>
      </CustomModal>
    </>
  );
};

export default HomePage;
