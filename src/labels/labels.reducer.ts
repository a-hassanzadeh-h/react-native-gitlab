import { createReducer } from "@reduxjs/toolkit";
import { AsyncState } from "../app/app.model";
import { LabelModel } from "./labels.model";

const initialState: AsyncState<LabelModel[]> = {
    data: [],
    status: undefined,
    error: undefined,
}

export default createReducer(initialState, {
    
})