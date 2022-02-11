import React from 'react';
import { Header } from './header/Header';
import { GlobalStyle } from './components/Background/GlobalStyle.style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header headerTitle={'Feedback form'} />
    </div>
  )
}

export default App;
