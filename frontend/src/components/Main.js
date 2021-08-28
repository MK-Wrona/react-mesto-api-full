import React from 'react';
import Card from './Card';
import editAvatarImage from '../images/editAvatarImage.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
  /*{прдписка для функционального компонента}*/
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
          <div className="profile__info">
            <div className="profile__icon-container">
              {/*onEditAvatar и для авы и для иконки карандаша, чтобы модалка вызывалась в любом случае */}
              <img src={`${currentUser.avatar}`} alt="Фото Профиля" className="profile__icon" onClick={onEditAvatar}/>
              <img src={editAvatarImage} alt="Иконка карандаша" className="profile__icon-edit" onClick={onEditAvatar} />
            </div>
            <div className="profile__wrap-text">
              <div className="profile__wrap">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile} />
              </div>
              <p className="profile__prof">{currentUser.about}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

        <div className="grid">
          {/*передаем пропсы*/}
          {cards.map((card) => (<Card  card={card} key={card._id}  onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>))}
        </div>
    </main>
    
  );
}

export default Main;