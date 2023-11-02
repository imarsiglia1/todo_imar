import { useQuery, useMutation } from "@tanstack/react-query";
import { taskEndpoints } from "../../domain/api/task/taskEndpoints";

interface TaskType {
  title: string;
  description: string;
}

export const useTaskAll = () => {
  return useQuery<TaskType[], Error>({
    queryKey: ["task_all"],
    queryFn: () => taskEndpoints.getAll({}),
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
      console.log(title);
      console.log(description);
      return taskEndpoints.createTask({
        title: title,
        description: description,
      });
    },
  });
};
