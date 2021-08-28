import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser,buttonText}) {
  const [name, setName] = React.useState();
  const [description, setDescription ] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm 
        title="Редактировать профиль"
        name="edit"
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        >
          
          <div className="pop-up__input-box">
          <input minLength="2" 
            maxLength="40" 
            type="text" 
            className="pop-up__input pop-up__input_name_name" 
            name="name" 
            id="input-name" 
            placeholder="Имя" 
            value={name || ""} 
            required 
            onChange={(evt) => setName(evt.target.value)}
            />
          <span 
            className='pop-up__form-error pop-up__form-error_active' 
            id='input-name-error' />
            </div>
            <div className="pop-up__input-box">
          <input 
            minLength="2" 
            maxLength="200" 
            type="text" 
            className="pop-up__input pop-up__input_name_prof" 
            name="prof" 
            placeholder="Хобби или занятие" 
            id="profession-input" 
            value={description || ""}  
            onChange={(evt) => setDescription(evt.target.value)}
            required />
          <span 
            className='pop-up__form-error pop-up__form-error_active' 
            id='input-prof-error' /></div>
          
        </PopupWithForm>
  );
}

export default EditProfilePopup;