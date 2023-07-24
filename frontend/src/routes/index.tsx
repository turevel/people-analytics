import Analytics from './Analytics';
import Login from './Login';
import NotFound from './NotFound';
import { createBrowserRouter , Navigate } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/login" />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/analytics',
		element: <Analytics />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
