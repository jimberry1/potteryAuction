import './App.css';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import LandingPage from './routes/landingPage';
import ExplorePage from './routes/explorePage';
import ArtPage from './routes/artPage';
import ArtistPage from './routes/artistPage';
import Navbar from './UI/navbar';
import AccountPage from './routes/accountPage';
import TestPage from './routes/testPage';
import ResultsPage from './routes/resultsPage';
import Footer from './components/tailwindComponents/footer';
import AuthenticationContainer from './containers/authenticationContainer';
import {
  adminShowAuthenticationContainerSelector,
  userIdStateSelector,
} from './store/storeUtilities';

function App() {
  const userId = useSelector(userIdStateSelector);
  const showAuth = useSelector(adminShowAuthenticationContainerSelector);
  return (
    <div>
      <Navbar />
      {!userId && showAuth && <AuthenticationContainer />}
      <div className="bg-gray-200 flex justify-center min-h-screen overflow-x-hidden pt-20">
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
      <Footer />
    </div>
  );
}

export default App;
