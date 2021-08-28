function InfoToolTip ({isOpen, onClose, message}) {
    return(
    <div className={`pop-up pop-up_info-tool ${isOpen ? 'pop-up_opened' : ''}`}>
        <div className="pop-up__window">
          <img src={message.iconPath} alt="Пикча результата регистрации" className="pop-up__reg-pic" />
          <h3 className="pop-up__reg-text">{message.text}</h3>
          <button type="button" className="pop-up__close-button" onClick={onClose} />
        </div>
      </div>
    )
}

export default InfoToolTip;