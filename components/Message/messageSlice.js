import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        content: '',
        type: ''
    },
    reducers: {
        setMessage: (state, action) => {
            state.content = action.payload.content;
            state.type = action.payload.type;
        },
        clearMessage: (state) => {
            state.content = '';
        },
    },
});

export const { setMessage, clearMessage } = messageSlice.actions;

export default messageSlice.reducer;
