import React from 'react';
import { Header } from './header/Header';
import { GlobalStyle } from './components/Background/GlobalStyle.style';
import { Form } from './components/form/Form';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header headerTitle={'Feedback form'} />
      <Form formTitle={'Registration'} />
    </div>
  )
}

export default App;
