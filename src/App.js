import { Home } from './pages';
import Styles from './App.module.css';
import { CoinDataProvider } from './CoinDataProvider';
import { StoreProvider } from './Store';

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinDataProvider>
        <StoreProvider>
          <Home />
        </StoreProvider>
      </CoinDataProvider>
    </QueryClientProvider>
  );
}

export default App;
