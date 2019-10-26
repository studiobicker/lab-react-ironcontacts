import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { actor, index, deleteActor } = this.props;
    return (
      <tr>
        <td>
          <img src={actor.pictureUrl} width="100" alt="{name}" />
        </td>
        <td>{actor.name}</td>
        <td>{actor.popularity}</td>
        <td>
          <button onClick={() => deleteActor(index)}>Delete</button>
        </td>
      </tr>
    );
  }
}
