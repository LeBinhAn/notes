import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fontsource/fira-code'
import './App.css'
import { SingleColumnLayout } from './layouts/singleColumnLayout'
import { Dashboard } from './pages/dashboard'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />
	},
	{
		path: '/single',
		element: <SingleColumnLayout />
	}
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
