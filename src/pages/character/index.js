import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Characters extends Component {
  state = {
    character: {},
  };

async componentDidMount() {
  const { id } = this.props.match.params;

  const response = await api.get(`/characters/${id}`);

  this.setState({ character: response.data });
}

  render() {
    const { character } = this.state;

    return (
      <div className="character-info">
        <h1>{character.name}</h1>
        <p>{character.description}</p>
        <p>
          URL: <a href={character.urls}>{character.urls}</a>
        </p>
      </div>
    )
  }
}