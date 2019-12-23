import React from 'react';

const Modal = (props) => {
    const {
        onChange,
        onConfirm,
        onCancel
    } = props;

    return (
        <div className="modal">
            <p className="modal__description">To delete item please confirm your password</p>
            <form className="modal__form">
                <input className="modal__input" onChange={onChange} type="text"/>
                <button className="modal__submit" onClick={onConfirm}>Confirm</button>
                <button className="modal__cancel" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
};

export default Modal;
