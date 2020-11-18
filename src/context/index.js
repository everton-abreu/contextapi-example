import React, { useState} from 'react';

const ClienteContext = React.createContext({ id: null, setCliente: (v) => {} });

export const ClienteProvider = ({ children }) => {


  const [id, setId] = useState(null);

  function setCliente(id) {
    setId(id);
  }

  return (
    <ClienteContext.Provider value={{ id, setCliente }}>
      {children}
    </ClienteContext.Provider>
  );
}

export default ClienteContext;
