const initialState = {
  name: "ANkit pal",
  loggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

//Selectors
//it's beneficial for renameing or doing any operations over here
export const getName = state => state.user.name;
