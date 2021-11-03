import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Index } from 'components/pages'
import { Timer } from 'components/pages/timer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/timer" component={Timer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
