import Roact from '@rbxts/roact';

import { Gotham, GothamBold } from './Fonts';
import Icon from './Icon';
import { Icons } from './Icons';
import Slider from './Slider';
import { ThemeProps } from './types';

interface SliderTileProps extends ThemeProps {
	Value: number;
	ShowValue?: boolean;
	Steps?: number;
	Title: string;
	Icon?: Icons;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	ChangedEvent?: (Value: number) => void;
}

interface SliderTileState {
	Icon?: Icons;
	DisplayValue: number;
}

export default class SliderTile extends Roact.PureComponent<SliderTileProps, SliderTileState> {
	state = {
		Icon: this.props.Icon,
		DisplayValue: this.props.Value,
	};

	render() {
		const theme = this.props.Theme;

		return (
			<frame
				Key='SliderTile'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size ?? new UDim2(1, 0, 0, 72)}
				BorderSizePixel={0}
				BackgroundTransparency={1}
			>
				<uipadding
					PaddingBottom={new UDim(0, 12)}
					PaddingLeft={new UDim(0, 16)}
					PaddingRight={new UDim(0, 16)}
					PaddingTop={new UDim(0, 12)}
				/>
				<frame
					Key='LeftAlign'
					AnchorPoint={new Vector2(0, 0.5)}
					Position={UDim2.fromScale(0, 0.5)}
					Size={UDim2.fromScale(1, 1)}
					BackgroundTransparency={1}
				>
					<uilistlayout
						Padding={new UDim(0, 16)}
						FillDirection={Enum.FillDirection.Horizontal}
						HorizontalAlignment={Enum.HorizontalAlignment.Left}
						VerticalAlignment={Enum.VerticalAlignment.Center}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>
					{this.state.Icon ? (
						<Icon
							Icon={this.state.Icon}
							IconSize='24p'
							MaxSize
							IconColor={theme.Scheme.onBackground}
							Size={UDim2.fromScale(0.25, 1)}
							LayoutOrder={1}
						/>
					) : undefined}
					<frame
						Key='MainHolder'
						Size={new UDim2(1, this.state.Icon ? -40 : 0, 1, 0)}
						BackgroundTransparency={1}
						LayoutOrder={2}
					>
						<uilistlayout
							Padding={new UDim(0, 5)}
							FillDirection={Enum.FillDirection.Vertical}
							HorizontalAlignment={Enum.HorizontalAlignment.Left}
							VerticalAlignment={Enum.VerticalAlignment.Center}
							SortOrder={Enum.SortOrder.LayoutOrder}
						/>
						<textlabel
							Key='Title'
							LayoutOrder={1}
							Size={UDim2.fromScale(1, 0.45)}
							BackgroundTransparency={1}
							FontFace={GothamBold}
							Text={this.props.Title}
							TextColor3={theme.Scheme.onBackground}
							TextXAlignment={Enum.TextXAlignment.Left}
							TextScaled
						>
							<uitextsizeconstraint MaxTextSize={18} />
							{this.props.ShowValue ? (
								<textlabel
									Key='Value'
									AnchorPoint={new Vector2(1, 0.5)}
									Position={UDim2.fromScale(1, 0.5)}
									Size={UDim2.fromScale(0.25, 1)}
									BackgroundTransparency={1}
									FontFace={Gotham}
									Text={tostring(this.state.DisplayValue)}
									TextColor3={theme.Scheme.onBackground}
									TextXAlignment={Enum.TextXAlignment.Right}
									TextScaled
								>
									<uitextsizeconstraint MaxTextSize={14} />
								</textlabel>
							) : undefined}
						</textlabel>
						<Slider
							Theme={theme}
							Value={this.props.Value}
							Steps={this.props.Steps}
							ChangedEvent={(value) => {
								if (this.props.ChangedEvent) {
									task.spawn(this.props.ChangedEvent, value);
								}

								this.setState({
									// Round value to nearest hundredth (Changed event still gets the actual value)
									DisplayValue: math.round(value * 100) / 100,
								});
							}}
							LayoutOrder={2}
						/>
					</frame>
				</frame>
			</frame>
		);
	}

	protected didUpdate(previousProps: SliderTileProps): void {
		if (previousProps.Icon !== this.props.Icon) {
			this.setState({
				Icon: this.props.Icon,
			});
		}
	}
}
