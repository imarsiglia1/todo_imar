import { useQuery, useMutation } from "@tanstack/react-query";
import { taskEndpoints } from "../../domain/api/task/taskEndpoints";
import { TaskType } from "../../domain/api/entities/general.entities";

export const useTaskAll = () => {
  return useQuery<TaskType[], Error>({
    queryKey: ["task_all"],
    queryFn: () => taskEndpoints.getAll(),
    select(data) {
      //   if (statusText == "OK") {
      //     return [];
      //   }
      return data;
    },
  });
};

export const useCreateTask = () => {
  return useMutation({
    mutationKey: ["create_task"],
    mutationFn: ({ title, description }: TaskType) => {
      return taskEndpoints.createTask({
        title: title,
        description: description,
      });
    },
  });
};

export const useEditTask = () => {
  return useMutation({
    mutationKey: ["edit_task"],
    mutationFn: (data: TaskType) => {
      return taskEndpoints.updateTask(data);
    },
  });
};

export const useRemoveTask = () => {
  return useMutation({
    mutationKey: ["remove_task"],
    mutationFn: (id: number) => {
      return taskEndpoints.deleteTask(id);
    },
  });
};

export const useCheckTask = () => {
  return useMutation({
    mutationKey: ["check_task"],
    mutationFn: (id: number) => {
      return taskEndpoints.checkTask(id);
    },
  });
};
