import React from "react";

export default function ActorTable(props) {
  return (
    <table className="actor-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
