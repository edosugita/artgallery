import { configureStore } from '@reduxjs/toolkit';
import { messageSlice } from "@/components/Message/messageSlice";

export const store = configureStore({
    reducer: {
        message: messageSlice.reducer,
    },
    preloadedState: {
        message: {
            content: '',
        }
    }
});
