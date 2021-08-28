import React from 'react';

function Login({authorization}) {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  //обработчики для инпутов входа
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

    authorization(email,password);
  }

  return (
    <section className="initial-page">
      <h1 className="initial-page__title">Вход</h1>
      <form onSubmit={handleSubmit} className="initial-page__form">
        <div className="initial-page__input-box">
        <input value={valueEmail} type="email" className="initial-page__input" placeholder="Email" onChange={handleChangeEmail}/>
        <input value={valuePassword} type="password" className="initial-page__input" placeholder="Пароль" onChange={handleChangePassword}/>
        </div>
        <button className="initial-page__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;