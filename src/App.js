import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from "./components/Navbar";
import { AlertState } from './context/alert/AlertState';
import { GitHubState } from './context/github/GithubState';
import { About } from './pages/About';
import { Home } from "./pages/Home";
import { Profile } from './pages/Profile';

function App() {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: "A simple info alert with an example link. Give it a click if you like."}} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;