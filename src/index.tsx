import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/system';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<App/>
		</ThemeProvider>
	</React.StrictMode>
)
