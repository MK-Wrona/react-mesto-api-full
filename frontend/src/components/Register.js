  
import React from 'react';
import { Link } from 'react-router-dom'; 

function Register({registration}) {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  //обработчики для инпутов регистрации
  function handleChangeEmail(e) {
    setValueEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setValuePassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    const email = valueEmail;
    const password = valuePassword;
    registration(email, password)
  } 

  return (
    <section className="initial-page_register">
      <h1 className="initial-page__title">Регистрация</h1>
      <form onSubmit={handleSubmit} className="initial-page__form">
      <div className="initial-page__input-box">
        <input value={valueEmail} type="email" className="initial-page__input" placeholder="Email" onChange={handleChangeEmail}/>
        <input value={valuePassword} type="password" className="initial-page__input" placeholder="Пароль" onChange={handleChangePassword}/>
        </div>
        <button className="initial-page__submit">Зарегистрироваться</button>
      </form>
      <Link className="initial-page__login" to="/signin">Уже зарегистрированы? Войти</Link>
    </section>
  );
}

export default Register;