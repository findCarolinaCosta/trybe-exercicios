import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        characters: [],
    };
  }

   fetchCharacters = () => {
    this.setState({ loading: true}, () => { //para garantir que algo só rode depois do estado ser atualizado! Passamos como segundo parâmetro da this.setState uma callback!
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
        this.setState({characters: data.results, loading: false})
      })
    })
    console.log('Retorno do fetch');
    console.log(this.state.characters, 'State na função de fetch');
  }

  componentDidMount() {
    console.log('Sobre qualquer mudança o componentDidMount renderiza a classe novamente');
    console.log(this.state.characters, 'State no componentDidMount');
    this.fetchCharacters();
  } // resolvido os problemas chamando a função fetchCharacters dentro do componentDidMount 

  renderJokeElement() {
    const { characters } = this.state;
    return (
        <>
          <section className="body">
            {characters.map(({ name, image, id }) => {
              return (
                <div className="container" key={id}> {/* as keys são usadas pelo react para identificar quais itens sofreram alterações, para que se for preciso rederizar novamente somente pela key modificada e não toda uma lista, etc...*/}
                  <h3>{name}</h3>
                  <img src={image} alt={name}/>
                </div>
              )
            })}
          </section>
        </>
    )
  }

  render() {
    const { characters, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    console.log('Render da classe.', 'Itens do characters do state:', characters.length);
    if (characters.length > 0) console.log('Quando o characters tiver algo esse output é chamado');
    return (
        <main className="App">
          <h1>
            Ricky and Morty Characters:
          </h1>
          {loading ? loadingElement :  this.renderJokeElement()}
        </main>
    );
  }
}

export default App;


// Exemplo um pouco mais complicado porém importante de mencionar:

// Para atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar 

// this.setState(
//   (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
//   () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
// ) 

//Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!
