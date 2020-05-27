import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TesteDeAura from './Pages/TesteDeAura'
import Pronto from './Pages/Pronto'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/testeDeAura" exact component={TesteDeAura} />
        <Route path="/pronto" exact component={Pronto} />
      </Switch>
    </BrowserRouter>
  );
}