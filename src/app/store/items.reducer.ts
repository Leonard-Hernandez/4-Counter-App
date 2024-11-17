import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state++),
    on(decrement, (state) => state--),
    on(reset, (state) => 0)
);