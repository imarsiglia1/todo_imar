import { TaskType } from "../../../domain/api/entities/general.entities";
import {
  API_URLCHECK_TASK,
  API_URL_CREATE_TASK,
  API_URL_DELETE_TASK,
  API_URL_EDIT_TASK,
  API_URL_GET_ALL_TASKS,
  API_URL_GET_TASK,
} from "../../constants/apiUrls";
import deleteFetcher from "../general/deleteFetcher";
import getFetcher from "../general/getFetcher";
import patchFetcher from "../general/patchFetcher";
import postFetcher from "../general/postFetcher";
import putFetcher from "../general/putFetcher";

export const taskEndpoints = {
  getAll(): Promise<TaskType[]> {
    return getFetcher(API_URL_GET_ALL_TASKS);
  },
  getTask: (id: number) => getFetcher(`${API_URL_GET_TASK}${id}`),
  createTask: (data: TaskType) => postFetcher(API_URL_CREATE_TASK, data),
  updateTask: (data: TaskType) =>
    putFetcher(`${API_URL_EDIT_TASK}${data.id}`, data),
  deleteTask: (id: number) => deleteFetcher(`${API_URL_DELETE_TASK}${id}`),
  checkTask: (id: number) => patchFetcher(`${API_URLCHECK_TASK}${id}`),
};
