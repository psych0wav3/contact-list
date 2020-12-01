import { HashRouter, Switch,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Contatos from './Contatos'

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contatos" component={Contatos} />
      </Switch>
    </HashRouter>
  )
}

export default Router