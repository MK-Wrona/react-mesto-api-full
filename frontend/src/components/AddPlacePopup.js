import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddPlacePopup({isOpen, onClose, onAddPlace,buttonText}) {
  const nameInput = React.useRef();
  const linkInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name: nameInput.current.value,
      link: linkInput.current.value
    });
  }

  return (
    <PopupWithForm 
        title="Новое место"
        name="add"
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        >
          <div className="pop-up__input-box">
          <input ref={nameInput} minLength="1" maxLength="30" type="text"  placeholder="Название"   className="pop-up__input pop-up__input_name_title" 
            name="title" 
            id="input-title" 
            required />
          <span 
            className='pop-up__form-error' 
            id='input-title-error'></span>
            </div>
            <div className="pop-up__input-box">
          <input 
            ref={linkInput}
            type="url" 
            placeholder="Ссылка на картинку" 
            className="pop-up__input pop-up__input_name_link" 
            name="link" 
            id="input-link" 
            required />
          <span 
            className='pop-up__form-error' 
            id='input-link-error'></span>
            </div>
        </PopupWithForm>
  )
}

export default AddPlacePopup;