const defaultState = [{}];

const ADD = "TODOS@ADD";
const REMOVE = "TODOS@REMOVE";
const EDIT = "TODOS@EDIT";

export function addTodos(todo) {
  return {
    type: ADD,
    payload: todo,
  };
}
export function removeTodos(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
export function editTodos(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}

export function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return state.concat(action.payload);
    }
    case REMOVE: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case EDIT: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload.data };
        }

        return todo;
      });
    }
    default: {
      return state;
    }
  }
}
