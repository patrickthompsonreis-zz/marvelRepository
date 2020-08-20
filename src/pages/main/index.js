import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import './styles.css'

export default class Main extends Component {
  state = {
    characters: [],
    charactersInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = async (page = 1) => {
    //O bloco abaixo retorna um erro pois invalida as credenciais da API
    // const response = await api.get(`/?page=${page}`);
    // const { data, ...dataInfo } = response.data;
    // this.setState({ characters: data, dataInfo, page });
    
    const response = await api.get();
    this.setState({ characters: response.data.data.results });
    console.log(response);
  };

  // Apenas incluir os dois métodos abaixo quando resolver a invalidação das credenciais da API Marvel
  // prevPage = () => {
  //   const { page, dataInfo } = this.state;

  //   if(page === 1) return;

  //   const pageNumber = page - 1;

  //   this.loadCharacters(pageNumber);
  // }

  // nextPage = () => {
  //   const { page, dataInfo } = this.state;

  //   if(page === dataInfo.pages) return;

  //   const pageNumber = page + 1;

  //   this.loadCharacters(pageNumber);
  // }

  render() {
    const { characters } = this.state;

    return (
      <div className="characters-list">
        {characters.map(characters => (
          <article key={characters.id}>
            <strong>{characters.name}</strong>
            <p>{characters.description}</p>
            <Link to={`/characters/${characters.id}`} >Saber mais</Link>
          </article>
        ))}
        <div className="actions">
          <button onClick={this.prevPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}