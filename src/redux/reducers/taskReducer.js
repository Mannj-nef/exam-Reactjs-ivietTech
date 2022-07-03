import { TYPE_LOCALSTORAGE, TYPE_TASK } from "../../constants/type";

const initialValue = {
  taskList: [],
  taskItem: {},
};

const taskReducer = (state = initialValue, action) => {
  switch (action.type) {
    case TYPE_TASK.GET_ALL_TASK: {
      return {
        ...state,
        taskList:
          JSON.parse(localStorage.getItem(TYPE_LOCALSTORAGE.TASKS_KEY)) || [],
      };
    }
    case TYPE_TASK.ADD_NEW_TASK: {
      const taskItem = action.payload;
      const newTask = { ...taskItem, id: new Date().getTime() };
      const tasks = [newTask, ...state.taskList];
      localStorage.setItem(TYPE_LOCALSTORAGE.TASKS_KEY, JSON.stringify(tasks));
      return {
        ...state,
        taskList: tasks,
      };
    }
    case TYPE_TASK.DELETE_TASK: {
      const id = action.payload;
      const newTasks = state.taskList.filter((task) => task.id !== id);
      localStorage.setItem(
        TYPE_LOCALSTORAGE.TASKS_KEY,
        JSON.stringify(newTasks)
      );
      return {
        ...state,
        taskList: newTasks,
      };
    }
    case TYPE_TASK.GET_TASK_BY_ID: {
      const id = action.payload;
      const taskListClone = [...state.taskList];

      const index = state.taskList.findIndex((taskItem) => taskItem.id === id);

      console.log(taskListClone[index]);
      return {
        ...state,
        taskItem: {
          ...taskListClone[index],
        },
      };
    }
    case TYPE_TASK.UPDATE_TASK: {
      const id = action.payload.id;
      const task = action.payload.task;
      const index = state.taskList.findIndex((taskItem) => taskItem.id === id);
      const taskListClone = [...state.taskList];

      taskListClone[index].task = task;
      localStorage.setItem(
        TYPE_LOCALSTORAGE.TASKS_KEY,
        JSON.stringify(taskListClone)
      );

      console.log(action.payload);
      return {
        ...state,
        taskList: taskListClone,
      };
    }

    default:
      return state;
  }
};

export default taskReducer;
