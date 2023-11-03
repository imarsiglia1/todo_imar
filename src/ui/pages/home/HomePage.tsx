import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import CustomModal from "../../components/general/CustomModal";
import CustomInput from "../../components/input/CustomInput";
import useModal from "../../hooks/useModal";
import {
  useCheckTask,
  useCreateTask,
  useEditTask,
  useRemoveTask,
  useTaskAll,
} from "../../hooks/useTask";
import TaskComp from "../../components/task/TaskComp";
import { TaskType } from "../../../domain/api/entities/general.entities";
import CustomTextArea from "../../components/input/CustomTextArea";
import {
  showErrorMessage,
  showLoading,
  showSuccessMessage,
} from "../../components/utils/SweetAlert";

const HomePage = () => {
  const { data: taskList, isFetching, refetch } = useTaskAll();
  const { mutateAsync: createAsync, isLoading: isLoadingCreate } =
    useCreateTask();
  const { mutateAsync: editAsync, isLoading: isLoadingEdit } = useEditTask();
  const { mutateAsync: deleteAsync, isLoading: isLoadingDelete } =
    useRemoveTask();
  const { mutateAsync: checkAsync, isLoading: isLoadingCheck } = useCheckTask();
  const { visible, openModal, closeModal } = useModal();
  const {
    visible: visibleDelete,
    openModal: openModalDelete,
    closeModal: closeModalDelete,
  } = useModal();
  const {
    visible: visibleEdit,
    openModal: openModalEdit,
    closeModal: closeModalEdit,
  } = useModal();
  const { register, handleSubmit, reset } = useForm<TaskType>();
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    setValue: setValueEdit,
  } = useForm<TaskType>();
  const [selectedTask, setSelectedTask] = useState<TaskType | undefined | null>(
    null
  );

  const onCreate = async (data: TaskType) => {
    showLoading("Creando tarea...");
    const res = await createAsync(data);
    console.log(res);
    if (res.HasError) {
      showErrorMessage(res.ErrMessage);
    } else {
      closeModal();
      showSuccessMessage("Nueva tarea creada correctamente");
      reset();
      refetch();
    }
  };

  const onPreDelete = (item: TaskType | undefined) => {
    setSelectedTask(item);
    openModalDelete();
  };

  const onPreEdit = (item: TaskType | undefined) => {
    if (item) {
      setSelectedTask(item);
      setValueEdit("title", item?.title);
      setValueEdit("description", item?.description);
      openModalEdit();
    }
  };

  const removeTask = async () => {
    if (selectedTask?.id) {
      closeModalDelete();
      showLoading("Eliminando...");
      const res = await deleteAsync(9393939);
      console.log(res);
      if (res.HasError) {
        showErrorMessage(res.ErrMessage);
      } else {
        showSuccessMessage("Tarea eliminada correctamente");
      }
      refetch();
      setSelectedTask(null);
    }
  };

  const editTask = async (data: TaskType) => {
    showLoading("Modificando...");
    const res = await editAsync({ ...selectedTask, ...data });
    if (res.HasError) {
      showErrorMessage(res.ErrMessage);
    } else {
      showSuccessMessage("Tarea modificada correctamente");
      resetEdit();
      closeModalEdit();
      refetch();
    }
  };

  const onToggle = async (data: TaskType | undefined) => {
    if (data?.id && taskList) {
      // showLoading();
      const { HasError, ErrMessage } = await checkAsync(data.id);
      if (HasError) {
        showErrorMessage(ErrMessage);
      } else {
        // showErrorMessage("");
      }
    }
  };

  if (!taskList) {
    return <></>;
  }

  return (
    <div className="container">
      <div className="align_right_content">
        <button className="button" type="button" onClick={openModal}>
          Nueva tarea <AiOutlinePlus />
        </button>
      </div>

      <br />

      {isLoadingCreate && <label>Cargando....</label>}

      <div className="row_task">
        {taskList.map((item, index) => (
          <TaskComp
            key={index}
            item={item}
            onInitRemove={onPreDelete}
            onInitEdit={onPreEdit}
            onToggle={onToggle}
            index={index}
          />
        ))}
      </div>

      <CustomModal visible={visible} closeModal={closeModal}>
        <label>Crear nueva tarea</label>
        <form onSubmit={handleSubmit(onCreate)} className="form_container">
          <CustomInput
            className="input_text"
            placeholder="Título"
            {...register("title", { required: true })}
          />

          <br />
          <CustomTextArea
            className="input_text_area"
            placeholder="Descripción"
            maxLength={1000}
            onResize={() => {}}
            {...register("description")}
          />
          <br />
          <br />
          <div className="row_space_around">
            <button
              className="button_secondary"
              type="button"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button className="button" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </CustomModal>

      <CustomModal visible={visibleDelete}>
        <label className="title_message">
          ¿Seguro que desea eliminar esta tarea?
        </label>
        <br />
        <br />
        <div className="row_space_around">
          <button className="button" type="button" onClick={closeModalDelete}>
            Cancelar
          </button>
          <button className="button_error" type="button" onClick={removeTask}>
            Eliminar
          </button>
        </div>
      </CustomModal>

      <CustomModal visible={visibleEdit}>
        <label>Modificar tarea</label>
        <form onSubmit={handleSubmitEdit(editTask)} className="form_container">
          <CustomInput
            className="input_text"
            placeholder="Título"
            {...registerEdit("title", { required: true })}
          />

          <br />
          <CustomTextArea
            className="input_text_area"
            placeholder="Descripción"
            maxLength={1000}
            onResize={() => {}}
            {...registerEdit("description")}
          />
          <br />
          <br />
          <div className="row_space_around">
            <button
              className="button_secondary"
              type="button"
              onClick={closeModalEdit}
            >
              Cancelar
            </button>
            <button className="button" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </CustomModal>
    </div>
  );
};

export default HomePage;
