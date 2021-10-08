import { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      selectFild: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      selectFild: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Fixando como faz formulário em react com componentes controlados:</h1>
        <h2>Para fixar</h2>
        <p>
          2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
        </p>
        <form>
          <label>
            <p>Campo de select: </p>
            <select name='selectFild' value={this.state.selectFild} onChange={this.handleChange} >
              <option>Select 1</option>
              <option>Select 2</option>
              <option>Select 3</option>
              <option>Select 4</option>
            </select>
          </label>
          <label>
            <p>Primeiro imput tipo texto: </p>
            <input type="text" />
          </label>
          <label>
            <p>Text area: </p>
            <textarea></textarea>
          </label>
          <div>
            <label>
              Segundo imput tipo checkbox:
              <input type="checkbox" />
            </label>
          </div>
        </form>

        <p>💡 Atenção!Essa nomenclatura, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário!Cuidado para não confundir.</p>
      </div >
    );
  }
}

export default Form;