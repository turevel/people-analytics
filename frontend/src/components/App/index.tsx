import { RouterProvider } from 'react-router-dom';
import MetricsProvider from '@/provider/MetricsProvider';
import router from '@/routes';

function App() {
	return (
		<>
			<MetricsProvider>
				<RouterProvider router={router} />
			</MetricsProvider>
		</>
	);
}

export default App;
