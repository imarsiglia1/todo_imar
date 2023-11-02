import axios from "axios";
import {
  API_URL_CREATE_TASK,
  API_URL_DELETE_TASK,
  API_URL_EDIT_TASK,
  API_URL_GET_ALL_TASKS,
  API_URL_GET_TASK,
} from "../../constants/apiUrls";
import getFetcher from "../general/getFetcher";
import postFetcher from "../general/postFetcher";

interface TaskType {
  title: string;
  description: string;
  id: number;
}

// function getAll(data: any): Promise<TaskType[]> {
//   return getFetcher(API_URL_GET_ALL_TASKS, data)
// }

export const taskEndpoints = {
  getAll(data: any): Promise<TaskType[]> {
    return getFetcher(API_URL_GET_ALL_TASKS, data);
  },
  getTask: (data: any) => getFetcher(API_URL_GET_TASK, data),
  createTask: (data: any) => postFetcher(API_URL_CREATE_TASK, data),
  updateTask: (data: any) => postFetcher(API_URL_EDIT_TASK, data),
  deleteTask: (data: any) => postFetcher(API_URL_DELETE_TASK, data),
};
