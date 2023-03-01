import { Header } from './components/Header'
import { Box } from '@mui/material'
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import type { ReactNode } from 'react';

export interface ISingleLayoutComponentProps {
  children?: ReactNode;
}

export const SingleColumnLayout = () => {
  return (
		<Box style={{ minHeight: '100vh', background: '#eceff1' }}>
			<Header />
			<Body>Body</Body>
			<Footer>Footer</Footer>
		</Box>
	)
}
