import type { Dispatch, SetStateAction } from "react";

type setStateType<T> = Dispatch<SetStateAction<T>>;

type state = "state";
type setState = "setState";

type useStateType<K extends state | setState, T> = K extends state
  ? T
  : K extends setState
  ? setStateType<T>
  : unknown;

export type { setStateType, state, setState, useStateType };
