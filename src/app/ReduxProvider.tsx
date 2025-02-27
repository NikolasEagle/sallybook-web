"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../lib/store";

type Children = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}
