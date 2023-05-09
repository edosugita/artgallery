import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from "@/components/Message/messageSlice";

const Message = () => {
    const message = useSelector((state) => state.message.content)
    const type = useSelector((state) => state.message.type)
    const dispatch = useDispatch()

    const handleClearMessage = () => {
        dispatch(clearMessage())
    };

    if (message) {
        return (
            <div className={`alert alert-${type} mt-3`} role="alert">
                <div className="text-center">
                    {message}
                </div>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClearMessage}></button>
            </div>
        );
    } else {
        return null;
    }
};

export default Message;
