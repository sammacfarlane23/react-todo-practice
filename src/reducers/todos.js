const defaultState = ['a', 'b', 'c'];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action.todo);
      return [...state, action.todo];
    default:
      return state;
  }
};
