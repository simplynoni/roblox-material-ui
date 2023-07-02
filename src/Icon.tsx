import Roact from '@rbxts/roact';
import { IconData } from './types';

interface IconProps {
	Icon: IconData;
	IconColor: Color3;
	IconTransparency?: number;
	AnchorPoint?: Vector2;
	Size: UDim2;
	Position?: UDim2;
	LayoutOrder?: number;
	MaxSize?: number;
	Circle?: boolean;
}

export default class Icon extends Roact.Component<IconProps> {
	render() {
		let maxSize: Roact.Element | undefined;
		let corner: Roact.Element | undefined;

		if (this.props.MaxSize) {
			maxSize = <uisizeconstraint MaxSize={new Vector2(this.props.MaxSize, this.props.MaxSize)} />;
		}

		if (this.props.Circle) {
			corner = <uicorner CornerRadius={new UDim(1)} />;
		}

		return (
			<imagelabel
				Key='Icon'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size}
				Image={this.props.Icon.Image}
				ImageRectOffset={this.props.Icon.ImageRectOffset}
				ImageRectSize={this.props.Icon.ImageRectSize}
				ImageColor3={this.props.IconColor}
				ImageTransparency={this.props.IconTransparency}
				BackgroundTransparency={1}
				LayoutOrder={this.props.LayoutOrder}
			>
				<uiaspectratioconstraint AspectRatio={1} />
				{maxSize}
				{corner}
			</imagelabel>
		);
	}
}
