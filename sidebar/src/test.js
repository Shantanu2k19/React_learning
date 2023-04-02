import React from 'react';
import styled from 'styled-components';
import './lol.css'

const MyComponent = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: inline;
  }
`;

const App = () => {
  return (
    <div className="home">

      <MyComponent>
        <div className="header">

        </div>
      </MyComponent>
    </div>
  );
};

export default App;