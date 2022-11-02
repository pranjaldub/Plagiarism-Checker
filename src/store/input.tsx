import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
    name: 'input',
    initialState: {
        text: "",
        report: {}
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        setReport: (state, action) => {
            state.report = action.payload
        }

    },
});
export default slice.reducer
export const { setText, setReport } = slice.actions