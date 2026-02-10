import Weather from "./components/weather"
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
function App() {
return(
<QueryClientProvider client={queryClient}>

<Weather/>


</QueryClientProvider>
);
}

export default App
