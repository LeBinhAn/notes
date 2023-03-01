import { ISingleLayoutComponentProps } from '../index';

interface IFooterProps extends ISingleLayoutComponentProps {};

export const Footer = (props: IFooterProps) => {
  return (
		<div style={{ border: '1px solid' }}>
      {props.children! && props.children}
		</div>
	)
}
