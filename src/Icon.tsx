import Roact from '@rbxts/roact';
import { Icons } from './Icons';

interface IconProps {
	Icon: Icons | string;
	IconSize: '24p';
	IconColor: Color3;
	AnchorPoint?: Vector2;
	Size: UDim2;
	Position?: UDim2;
	LayoutOrder?: number;
	MaxSize?: boolean;
}

export default class Icon extends Roact.Component<IconProps> {
	render() {
		let maxSize: Roact.Element | undefined;

		if (this.props.IconSize === '24p' && this.props.MaxSize) {
			maxSize = <uisizeconstraint MaxSize={new Vector2(24, 24)} />;
		}

		return (
			<imagelabel
				Key='Icon'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size}
				Image={this.props.Icon}
				ImageColor3={this.props.IconColor}
				BackgroundTransparency={1}
				LayoutOrder={this.props.LayoutOrder}
			>
				<uiaspectratioconstraint AspectRatio={1} />
				{maxSize}
			</imagelabel>
		);
	}
}
