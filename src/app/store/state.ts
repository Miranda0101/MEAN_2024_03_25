export interface CounterState{
    count: number;
    // errMsg: string | null;
}
export const initialState: CounterState = {
    count: 0,
}

export interface UserState{
    age: number;
    name: string;
    // errMsg: string | null;
}