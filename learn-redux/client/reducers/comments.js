function postComments(state = [], action) {

  switch (action.type) {
    case 'ADD_COMMENT' :
      return [
        ...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT' :
      console.group('remove');
      console.log(action.i);
      console.log(...state.slice(0, action.i));
      console.log(...state.slice(action.i+1));
      console.groupEnd();
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;