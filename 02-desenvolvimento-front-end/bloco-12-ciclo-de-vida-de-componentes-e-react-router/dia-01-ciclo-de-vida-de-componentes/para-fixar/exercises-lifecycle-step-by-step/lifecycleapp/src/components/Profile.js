import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
      userName: '',
      loading: true,
      showProfile: true,
      hideBtn: true,
    };

    this.changeDataJson = this.changeDataJson.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getUserNameFromLocalStorage = this.getUserNameFromLocalStorage.bind(this);
    this.changeProfile = this.changeProfile.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { userName } = this.state;
    if (prevState.userName.length < userName.length) {
      localStorage.setItem('UserName', userName);
    }
  }

  componentWillUnmount() {
    /* eslint-disable no-alert */
    alert('Você ocultou seu perfil');
    /* eslint-disable no-alert */
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { userName } = this.state;
    const myUser = userName; // Preencha myUser com o seu user do GitHub.
    try {
      const url = `https://api.github.com/users/${myUser}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.changeDataJson(dataJson);
      this.setState({ loading: false, hideBtn: false });
    } catch (error) {
      console.log(error);
    }
  }

  getUserNameFromLocalStorage() {
    const { userName } = this.state;
    if (userName.length === 0 && localStorage.getItem('UserName') !== null) {
      this.setState({
        userName: localStorage.getItem('UserName'),
      });
    }
  }

  changeProfile() {
    const { showProfile } = this.state;
    this.setState({ showProfile: !showProfile });
  }

  btnHidden() {
    return (
      <div className="central d-flex justify-content-center">
        <button
          className="btn btn-dark align-self-center"
          type="button"
          onClick={ this.changeProfile }
        >
          Mostrar / Ocultar Perfil
        </button>
      </div>
    );
  }

  returnLogoutBtn() {
    return (
      <div className="central d-flex justify-content-center">
        <button
          className="btn btn-dark align-self-center"
          type="button"
          // onClick={  }
        >
          Logout
        </button>
      </div>
    );
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  render() {
    const { api: { name, email, bio, location, login } = '', api,
      loading, showProfile, hideBtn } = this.state;
    this.getUserNameFromLocalStorage();
    const loginUser = (
      <div className="form">
        <form className="input-group justify-content-center">
          <input
            className="form-control"
            type="text"
            name="userName"
            onChange={ this.handleChange }
            placeholder="Digite seu nome usuário"
          />
          <button
            className="btn btn-outline-dark"
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name }</h1>
        <a href={ api.html_url }>{ login }</a>
        <span>{ email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ bio }</p>
        <p>{ location }</p>
      </div>
    );

    const conditionCardInfo = loading ? <p>Loading...</p> : card;
    return (
      <>
        <div className="git d-flex flex-column justify-content-center align-items-center">
          { showProfile ? conditionCardInfo : null }
          { api ? null : loginUser }
        </div>
        { hideBtn ? null : this.btnHidden() }
        { hideBtn ? null : this.returnLogoutBtn() }
      </>
    );
  }
}

export default Profile;
