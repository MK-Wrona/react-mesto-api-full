class Api {
    
    constructor({ BASE_URL, headers }) {
            this._BASE_URL = BASE_URL;
            this._headers = headers;
        }
        
        // возьми сет карточек сервака
    getInitialCards() {
            return fetch(`${this._BASE_URL}/cards`, { headers: this._headers })
                .then(response => this._checkRequestResult(response));

        }
        // если что-то не так (все)
    errorHandler(error) {
        console.log(error);
    }
    _checkRequestResult(response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Упс, возникла ошибка: ${response.status}`);
        }
        //получи данные пользователя с сервера
    getUserInfo() {
        return fetch(`${this._BASE_URL}/users/me`, { headers: this._headers })
            .then(response => this._checkRequestResult(response));
    }

    // Отредактировать данные
    editUserInfo(name, profession) {
        return fetch(`${this._BASE_URL}/users/me`, {
                method: 'PATCH',
                credentials:"include",
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    about: profession
                })
            })
            .then(response => this._checkRequestResult(response));
    }

    // добавь карточку на сервак
    plusCard(name, link) {
            return fetch(`${this._BASE_URL}/cards`, {
                    method: 'POST',
                    headers: this._headers,
                    credentials:"include",
                    body: JSON.stringify({
                        name: name,
                        link: link
                    })
                })
                .then(response => this._checkRequestResult(response));
        }
        // Удали карточку
    deleteCard(cardId) {
        return fetch(`${this._BASE_URL}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
                credentials:"include"
            })
            .then(response => this._checkRequestResult(response));
    }

    // +лойс
    likeCard(cardId) {
        return fetch(`${this._BASE_URL}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers,
                credentials:"include"
            })
            .then(response => this._checkRequestResult(response));
    }

    // Удаление лайка карточке
    unlikeCard(cardId) {
        return fetch(`${this._BASE_URL}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
                credentials:"include"
            })
            .then(response => this._checkRequestResult(response));
    }



    // редактировать аватар
    editUserAvatar(urlAvatar) {
        console.log(urlAvatar);
        return fetch(`${this._BASE_URL}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                credentials:"include",
                body: JSON.stringify({
                    avatar: urlAvatar
                })
            })
            .then(response => this._checkRequestResult(response))
    }

}

const api = new Api({
    BASE_URL: 'http://backend.daru.students.nomoredomains.rocks',
    headers: {
        'Content-Type': 'application/json'
    }
});
export default api;