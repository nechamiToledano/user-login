
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { Provider } from "react-redux";
import { UserContext, UserType } from "./components/userReducer";
import { store } from "./store/store";
import { useReducer } from "react";
import UserReducer from "./components/userReducer";



function App() {
  const initialState: UserType  = null;
  const [user, userDispatch] = useReducer(UserReducer, initialState);

  return (
    <Provider store={store}>
      <UserContext value={{ user, userDispatch }}>
        <RouterProvider router={router} />
      </UserContext>
    </Provider>
  );
}

export default App;