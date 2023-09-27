import Roact from '@rbxts/roact';
import ShadowElevations from './Elevations';

interface ShadowProps {
	Elevation: 1 | 2 | 3 | 4 | 5;
	Transparency?: number | Roact.Binding<number>;
	ZIndex?: number;
}

// @TODO: Theme
export default class Shadow extends Roact.PureComponent<ShadowProps> {
	render() {
		const shadowElevation = ShadowElevations[this.props.Elevation];
		return (
			<imagelabel
				key='Shadow'
				Image={shadowElevation.Id}
				// @TODO: Theme
				ImageColor3={new Color3(0, 0, 0)}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={shadowElevation.Position}
				Size={shadowElevation.Size}
				ImageTransparency={this.props.Transparency}
				ZIndex={this.props.ZIndex}
				ScaleType={Enum.ScaleType.Slice}
				SliceCenter={shadowElevation.SliceCenter}
			/>
		);
	}
}
