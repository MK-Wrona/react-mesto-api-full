function ImagePopup({card, onClose}) {

    return (
      <div className={`pop-up pop-up_full ${card.name ? 'pop-up_opened' : ''}`}>
        <div className="pop-up__box">
          <img src={card.link} alt="Полноэкранное изображение" className="pop-up__full-image" />
          <h3 className="pop-up__title-full-image">{card.name}</h3>
          <button type="button" className="pop-up__close-button" onClick={onClose} />
        </div>
      </div>
    );
  }
  
  export default ImagePopup;