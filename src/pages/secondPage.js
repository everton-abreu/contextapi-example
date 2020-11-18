import React, { useContext } from 'react';

import ClienteContext from '../context';

function SecondScreen() {
  const { id } = useContext(ClienteContext);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ visibility: 'hidden' }}>.</div>
      
      <h1>tela 02</h1>

      <h2> O id é: { id }</h2>
    </div>
  );
}

export default SecondScreen;
