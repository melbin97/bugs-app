import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

export default function configureAppStore() {
  return configureStore({
    reducer
  })
}