import React from 'react';
import styled from 'styled-components';

const MyComponent = styled.div`
  display: inline;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const App = () => {
  return (
    <div>
      <MyComponent>
        This will be blue on desktop and red on mobile
      </MyComponent>
    </div>
  );
};

export default App;