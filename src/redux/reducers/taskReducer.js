import { KEY_LOCALSTORAGE, TYPE_TASK } from "../../constants/type";

const initialValue = {
  listtask: [],
  taskItem: {},
};

const taskReducer = (state = initialValue, action) => {
  switch (action.type) {
    case TYPE_TASK.GET_ALL_TASKLLTASK: {
      console.log("get all task");
      return {
        ...state,
        listtask: JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE.TASK)) || [],
      };
    }
    case TYPE_TASK.ADD_TASK: {
      console.log("add task");
      const task = action.payload;
      const newTask = [task, ...state.listtask];
      localStorage.setItem(KEY_LOCALSTORAGE.TASK, JSON.stringify(newTask));

      return {
        ...state,
        listtask: newTask,
      };
    }
    case TYPE_TASK.DELETE_TASK: {
      console.log("delete task");
      const id = action.payload.id;
      const tasksClone = [...state.listtask];
      const newTask = tasksClone.filter((task) => task.id !== id);
      return {
        ...state,
        listtask: newTask,
      };
    }
    case TYPE_TASK.GET_TASK_ID: {
      console.log("add task by id");
      //   const id = action.payload.id;
      //   const task = action.payload.task;

      return {
        ...state,
        taskItem: {},
      };
    }
    case TYPE_TASK.UPDATE_TASK: {
      console.log("update task");
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default taskReducer;
