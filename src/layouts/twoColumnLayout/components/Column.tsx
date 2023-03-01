import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { TwoColumnLayoutType } from '../../../constants'

interface IColumnProps {
	children?: ReactNode
	columnType: string
}

export const Column = (props: IColumnProps) => {
	if (props.columnType === TwoColumnLayoutType.SMALL_COLUMN) {
		return (
			<Box sx={{ flexDirection: 'column', width: '15%' }} border='1px solid'>
				{props.children! && props.children}
			</Box>
		)
	}

	if (props.columnType === TwoColumnLayoutType.COLLAPSED_SMALL_COLUMN) {
		return (
			<Box sx={{ flexDirection: 'column', width: '5%' }} border='1px solid'>
				{props.children! && props.children}
			</Box>
		)
	}

	if (props.columnType === TwoColumnLayoutType.BIG_COLUMN) {
		return (
			<Box sx={{ flexDirection: 'column', flex: '1' }} border='1px solid'>
				{props.children! && props.children}
			</Box>
		)
	}

	return <></>
}
