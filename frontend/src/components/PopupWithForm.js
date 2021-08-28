function PopupWithForm({name, title, children, isOpen, onClose, handleSubmit, buttonText}) {

    return (
        <div className={`pop-up pop-up_${name} ${isOpen ? 'pop-up_opened' : ''}`}>
          <div className="pop-up__window">
            <h3 className="pop-up__title">{title}</h3>
            <form className="popup__form" name={name} noValidate onSubmit={handleSubmit}>
              {children}
              <button
            type="submit" 
            className="pop-up__submit-button" 
            name="submit" >{buttonText}</button>
            </form>
            <button type="button" className="pop-up__close-button" onClick={onClose} />
          </div>
        </div>
    );
  }
  
  export default PopupWithForm;