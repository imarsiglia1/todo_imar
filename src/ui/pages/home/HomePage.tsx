import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { TaskType } from "../../../domain/api/entities/general.entities";
import CustomModal from "../../components/general/CustomModal";
import EmptyMessage from "../../components/general/EmptyMessage";
import CustomInput from "../../components/input/CustomInput";
import CustomTextArea from "../../components/input/CustomTextArea";
import TaskComp from "../../components/task/TaskComp";
import {
  showErrorMessage,
  showLoading,
  showSuccessMessage,
} from "../../components/utils/SweetAlert";
import useModal from "../../hooks/useModal";
import {
  useCheckTask,
  useCreateTask,
  useEditTask,
  useRemoveTask,
  useTaskAll,
} from "../../hooks/useTask";
import CustomSelect from "../../components/input/CustomSelect";
import DarkModeToggle from "../../components/general/DarkModeToggle";

const HomePage = () => {
  const { data: taskList, isFetching, refetch } = useTaskAll();
  const { mutateAsync: createAsync } = useCreateTask();
  const { mutateAsync: editAsync } = useEditTask();
  const { mutateAsync: deleteAsync } = useRemoveTask();
  const { mutateAsync: checkAsync } = useCheckTask();
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
  const { register, handleSubmit, reset } = useForm<TaskType>({
    shouldFocusError: true,
    shouldUseNativeValidation: true,
    reValidateMode: "onSubmit",
  });
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    setValue: setValueEdit,
  } = useForm<TaskType>({
    shouldFocusError: true,
    shouldUseNativeValidation: true,
    reValidateMode: "onSubmit",
  });

  const [filter, setFilter] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
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

  const filteredList = useMemo(() => {
    if (taskList) {
      return taskList?.filter(
        (task) =>
          task.title.toLowerCase().includes(filter.trim().toLowerCase()) &&
          (isCompleted != "true" ? true : task.isChecked == true)
      );
    } else {
      return [];
    }
  }, [filter, isCompleted, taskList]);

  if (!taskList) {
    return <></>;
  }

  return (
    <div className="container">
      <div className="flex_right">
        <DarkModeToggle />
      </div>
      <br />

      <div className="row_space">
        <CustomInput
          type="text"
          className="input_text w_50"
          placeholder="Buscar tarea"
          onChange={(e) => setFilter(e.target.value)}
        />

        <CustomSelect onChange={(e) => setIsCompleted(e.target.value)}>
          <option value={""}>Todas</option>
          <option value={"true"}>Completadas</option>
        </CustomSelect>

        <div className="align_right_content">
          <button className="button" type="button" onClick={openModal}>
            Nueva tarea <AiOutlinePlus />
          </button>
        </div>
      </div>

      <br />
      <br />

      {taskList.length == 0 && !isFetching && (
        <EmptyMessage message="No existen tareas" />
      )}

      <div className="row_task">
        {filteredList.map((item, index) => (
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
            {...register("title", {
              required: "Ingrese un título entre 5 y 20 caracteres",
              minLength: 5,
              maxLength: 20,
            })}
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
          <button
            className="button_secondary"
            type="button"
            onClick={closeModalDelete}
          >
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
            {...registerEdit("title", {
              required: "Ingrese un título entre 5 y 20 caracteres",
              minLength: 5,
              maxLength: 20,
            })}
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
