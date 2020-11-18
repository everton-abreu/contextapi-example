import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ClienteContext from '../context';

function FirstScreen() {
  let history = useHistory();
  let { setCliente } = useContext(ClienteContext);

  const navega = () => {
    setCliente(3);
    history.push('/2');
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ visibility: 'hidden' }}>.</div>
      
      <h1>tela 01</h1>

      <button onClick={navega}> setar id como 3</button>
    </div>
  );
}

export default FirstScreen;
