import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { index } from 'components/pages'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={index} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
