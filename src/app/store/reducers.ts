import { CounterState, initialState } from "./state";
import { increment, decrement, reset } from "./actions";
import { createReducer, on } from "@ngrx/store";

export const counterReducer = createReducer(initialState, 
    on(increment, (state: CounterState)=>({...state, count: state.count + 1})),
    on(decrement, (state: CounterState)=>({...state, count: state.count - 1})),
    on(reset, ()=> initialState)
)