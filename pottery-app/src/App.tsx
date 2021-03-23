import './App.css';
import { Switch, Route } from 'react-router';
import LandingPage from './routes/landingPage';
import ExplorePage from './routes/explorePage';
import ArtPage from './routes/artPage';
import ArtistPage from './routes/artistPage';
import Navbar from './UI/navbar';
import AccountPage from './routes/accountPage';
import TestPage from './routes/testPage';
import ResultsPage from './routes/resultsPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 flex justify-center h-screen overflow-x-hidden overflow-y-scroll pt-20">
        <Switch>
          <Route path="/explore" component={ExplorePage} />
          <Route path="/artwork" component={ArtPage} />
          <Route path="/artist" component={ArtistPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
