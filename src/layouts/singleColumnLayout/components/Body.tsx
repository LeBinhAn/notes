import { ISingleLayoutComponentProps } from '../index';

interface IBodyProps extends ISingleLayoutComponentProps {};

export const Body = (props: IBodyProps) => {
	return <div style={{ height: '100%', border: '1px solid' }}>
    {props.children! && props.children}
  </div>
}
