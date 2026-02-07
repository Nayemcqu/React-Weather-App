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

<div className="container mx-auto">
<Weather/>
</div>

</QueryClientProvider>
);
}

export default App
