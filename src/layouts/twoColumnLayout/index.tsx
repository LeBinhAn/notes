import { Box } from '@mui/material'
import { TwoColumnLayoutType } from '../../constants'
import { Column } from './components/Column'
import { SideBarContext } from './contexts/sideBarContext';
import { useState } from 'react';
import { ILayoutProps } from '..';

interface ITwoColumnLayoutProps extends ILayoutProps {}

export const TwoColumnLayout = (props: ITwoColumnLayoutProps) => {
	const [isSideBarShow, setIsSideBarShow] = useState<boolean>(true)

	return (
		<SideBarContext.Provider value={{ isSideBarShow, setIsSideBarShow }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					height: '100%'
				}}
				style={{ background: '#eceff1' }}
			>
				{isSideBarShow ? (
					<Column columnType={TwoColumnLayoutType.SMALL_COLUMN}>
						Small
						<button onClick={() => setIsSideBarShow(!isSideBarShow)}>
							Collapse
						</button>
					</Column>
				) : (
					<Column columnType={TwoColumnLayoutType.COLLAPSED_SMALL_COLUMN}>
						MINI
						<button onClick={() => setIsSideBarShow(!isSideBarShow)}>
							Collapse
						</button>
					</Column>
				)}
				<Column columnType={TwoColumnLayoutType.BIG_COLUMN}>Big</Column>
			</Box>
		</SideBarContext.Provider>
	)
}
