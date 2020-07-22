import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
// import Highlights from "./components/highlights/Highlights"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import PhotographerDetails from "./components/photographers/PhotographerDetails"
import DisplayPhotographers from "./components/displays/DisplayPhotographers"
import DisplayGallery from "./components/displays/DisplayGallery"
import DisplayHighlights from "./components/displays/DisplayHighlights"
import DisplayTournaments from "./components/displays/DisplayTournaments"
import DisplayAccount from "./components/displays/DisplayAccount"


class App extends Component {
state={
  
}
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={DisplayHighlights}/>
            <Route  path='/displayHighlights' component={DisplayHighlights}/>
            <Route  path='/displayPhotographers' component={DisplayPhotographers}/>
            <Route  path='/displayTournaments' component={DisplayTournaments}/>
            <Route  path='/displayGallery' component={DisplayGallery}/>
            <Route  path='/photographers/:id' component={PhotographerDetails}/>
            <Route  path='/displayAccount' component={DisplayAccount}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
