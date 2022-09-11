import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import ThemeContext from './Theme/ThemeContext';

import { Theme } from './Constants';
import { Gotham, GothamBold } from './Fonts';
import Icon from './Icon';
import { Icons } from './Icons';
import RoundedFrame from './RoundedFrame';

interface ColorTileProps {
	Title: string;
	Description?: string;
	Color: Color3;
	Icon?: Icons;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	LayoutOrder?: number;
	PressedEvent?: () => void;
	OpensNewPage?: boolean;
	Selected?: boolean;
}

interface ColorTileState {
	Color: Color3;
	Icon?: Icons;
	Selected?: boolean;
}

export default class ColorTile extends Roact.PureComponent<ColorTileProps, ColorTileState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	constructor(props: ColorTileProps) {
		super(props);

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());

		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);

		this.setState({
			Color: this.props.Color,
			Icon: this.props.Icon,
			Selected: this.props.Selected,
		});
	}

	render() {
		return (
			<ThemeContext.Consumer
				render={(theme) => {
					const trailingIcon = this.props.OpensNewPage ? (
						<Icon
							Icon={Icons.NavigateRight}
							IconSize='24p'
							MaxSize
							IconColor={theme.Colors.onBackground}
							Size={new UDim2(0, 24, 1, 0)}
							LayoutOrder={2}
						/>
					) : undefined;

					const selectedIcon = this.state.Selected ? (
						<imagelabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(1, 1)}
							BackgroundColor3={theme.Colors.background}
							BackgroundTransparency={theme.Theme === Theme.Dark ? 0.9 : 0.5}
							ImageColor3={theme.Colors.onPrimaryContainer}
							Image={Icons.Check}
						>
							<uicorner CornerRadius={new UDim(1)} />
						</imagelabel>
					) : undefined;

					return (
						<textbutton
							Key='ColorTile'
							AnchorPoint={this.props.AnchorPoint}
							Position={this.props.Position}
							Size={this.props.Size ?? new UDim2(1, 0, 0, 72)}
							LayoutOrder={this.props.LayoutOrder}
							Text=''
							BorderSizePixel={0}
							BackgroundTransparency={this.stateBinding.map((opacity) => {
								return 1 - opacity;
							})}
							BackgroundColor3={theme.Colors.onBackground}
							AutoButtonColor={false}
							Event={{
								MouseButton1Click: async () => {
									if (this.props.PressedEvent) {
										this.props.PressedEvent();
									}
								},
								MouseButton1Up: async () => {
									this.stateMotor.setGoal(new Linear(0.08, { velocity: 0.5 }));
								},
								MouseEnter: () => {
									this.stateMotor.setGoal(new Linear(0.08, { velocity: 0.5 }));
								},
								MouseButton1Down: () => {
									this.stateMotor.setGoal(new Linear(0.12, { velocity: 0.5 }));
								},
								MouseLeave: () => {
									this.stateMotor.setGoal(new Linear(0, { velocity: 0.5 }));
								},
							}}
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
								Size={UDim2.fromScale(0.65, 1)}
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
										IconColor={theme.Colors.onBackground}
										Size={UDim2.fromScale(0.25, 1)}
										LayoutOrder={1}
									/>
								) : undefined}
								<frame
									Key='TextHolder'
									Size={UDim2.fromScale(this.state.Icon ? 0.9 : 1, 1)}
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
										TextColor3={theme.Colors.onBackground}
										TextXAlignment={Enum.TextXAlignment.Left}
										TextScaled
									>
										<uitextsizeconstraint MaxTextSize={18} />
									</textlabel>
									{this.props.Description ? (
										<textlabel
											Key='Description'
											LayoutOrder={2}
											Size={UDim2.fromScale(1, 0.35)}
											BackgroundTransparency={1}
											FontFace={Gotham}
											Text={this.props.Description}
											TextColor3={theme.Colors.onBackground}
											TextXAlignment={Enum.TextXAlignment.Left}
											TextScaled
										>
											<uitextsizeconstraint MaxTextSize={14} />
										</textlabel>
									) : undefined}
								</frame>
							</frame>
							<frame
								Key='RightAlign'
								AnchorPoint={new Vector2(1, 0.5)}
								Position={UDim2.fromScale(1, 0.5)}
								Size={UDim2.fromScale(0.3, 1)}
								BackgroundTransparency={1}
							>
								<uilistlayout
									Padding={new UDim(0, 0)}
									FillDirection={Enum.FillDirection.Horizontal}
									HorizontalAlignment={Enum.HorizontalAlignment.Right}
									VerticalAlignment={Enum.VerticalAlignment.Center}
									SortOrder={Enum.SortOrder.LayoutOrder}
								/>
								<RoundedFrame
									Key='Color'
									Size={new UDim2(0, 40, 0.5, 0)}
									Color={this.state.Color}
									CornerRadius='Full'
									BorderSizePixel={0}
									LayoutOrder={1}
									Outline
									OutlineColor={theme.Colors.outline}
								>
									<uiaspectratioconstraint
										AspectRatio={1}
										AspectType={Enum.AspectType.FitWithinMaxSize}
										DominantAxis={Enum.DominantAxis.Height}
									/>
									{selectedIcon}
								</RoundedFrame>
								{trailingIcon}
							</frame>
						</textbutton>
					);
				}}
			/>
		);
	}

	protected didUpdate(previousProps: ColorTileProps): void {
		if (this.props.Color !== previousProps.Color) {
			this.setState({
				Color: this.props.Color,
			});
		}

		if (this.props.Icon !== previousProps.Icon) {
			this.setState({
				Icon: this.props.Icon,
			});
		}

		if (this.props.Selected !== previousProps.Selected) {
			this.setState({
				Selected: this.props.Selected,
			});
		}
	}
}
