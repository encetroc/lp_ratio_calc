import { Calculator, Home } from './pages';
import { CoinDataProvider } from './CoinDataProvider';
import { StoreProvider } from './Store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinDataProvider>
        <StoreProvider>
          <Router>
            <Switch>
              <Route path="/app">
                <Calculator />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </StoreProvider>
      </CoinDataProvider>
    </QueryClientProvider>
  );
}

export default App;
