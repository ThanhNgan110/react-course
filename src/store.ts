import { combineReducers } from "redux";
import { createStore } from "redux";
import { appReducer } from "./redux/app.reducer";
import { memberReducer } from "./redux/member.reducer";

const rootReducers = combineReducers({
  app: appReducer,
  member: memberReducer
});

export const store = createStore(rootReducers);

/* store
store = {
  app: {
    isLoading: false,
    showToast: false
  },
  member: {{
    variables: []
  }
}
*/