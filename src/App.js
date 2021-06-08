import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BurgerBuilder } from './Pages'
import { Navbar } from './Components'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/'><BurgerBuilder/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
