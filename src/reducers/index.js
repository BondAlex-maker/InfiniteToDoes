import todos from "./todos";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos,
  config: () => {
    return {
      lang: "en",
      locale: {
        show: "Mostrar: "
      }
    };
  }
});

export default rootReducer;
