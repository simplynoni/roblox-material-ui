import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { ContainerScheme, LowerCaseContainerScheme } from '../Constants';
import { Icons } from '../Icons';
import ThemeContext from '../Theme/ThemeContext';
import { LowerCaseFirstLetter } from '../Utils';

interface TonalButtonProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	AutomaticSize?: boolean;
	Text: string;
	Icon?: Icons;
	Disabled?: boolean;
	ColorScheme?: ContainerScheme;
	Pressed: () => void;
}

interface TonalButtonState {
	Debounce: boolean;
}

export class TonalButton extends Roact.Component<TonalButtonProps, TonalButtonState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	state = {
		Debounce: false,
	};

	constructor(props: TonalButtonProps) {
		super(props);

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());
		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);
	}

	render() {
		return (
			<ThemeContext.Consumer
				render={(theme) => {
					const colorScheme = this.props.ColorScheme || ContainerScheme.SecondaryContainer;
					const lowerCaseColorScheme = LowerCaseFirstLetter(colorScheme) as LowerCaseContainerScheme;

					return (
						<textbutton
							AutoButtonColor={false}
							BackgroundColor3={
								this.props.Disabled ? theme.Colors.onSurface : theme.Colors[lowerCaseColorScheme]
							}
							BackgroundTransparency={this.props.Disabled ? 1 - 0.12 : 0}
							BorderSizePixel={0}
							AnchorPoint={this.props.AnchorPoint}
							Position={this.props.Position}
							Size={
								this.props.AutomaticSize ? new UDim2(new UDim(0, 0), new UDim(0, 35)) : this.props.Size
							}
							Font={'GothamMedium'}
							Text={this.props.Text}
							TextColor3={this.props.Disabled ? theme.Colors.onSurface : theme.Colors[`on${colorScheme}`]}
							TextTransparency={this.props.Disabled ? 1 - 0.38 : 0}
							TextXAlignment={'Center'}
							TextYAlignment={'Center'}
							AutomaticSize={this.props.AutomaticSize ? 'X' : undefined}
							TextScaled
							Event={{
								MouseButton1Click: async () => {
									if (this.props.Disabled) return;
									if (this.state.Debounce === false) {
										this.setState({
											Debounce: true,
										});

										task.spawn(this.props.Pressed);

										await Promise.delay(0.25);
										this.setState({
											Debounce: false,
										});
									}
								},
								MouseButton1Up: async () => {
									if (this.props.Disabled) return;
									this.stateMotor.setGoal(new Linear(0.08, { velocity: 0.5 }));
								},
								MouseEnter: () => {
									if (this.props.Disabled) return;
									this.stateMotor.setGoal(new Linear(0.08, { velocity: 0.5 }));
								},
								MouseButton1Down: () => {
									if (this.props.Disabled) return;
									this.stateMotor.setGoal(new Linear(0.12, { velocity: 0.5 }));
								},
								MouseLeave: () => {
									if (this.props.Disabled) return;
									this.stateMotor.setGoal(new Linear(0, { velocity: 0.5 }));
								},
							}}
						>
							<uitextsizeconstraint MaxTextSize={20} MinTextSize={1} />
							<uipadding
								PaddingLeft={new UDim(0, 24)}
								PaddingRight={new UDim(0, 24)}
								PaddingBottom={new UDim(0, 6)}
								PaddingTop={new UDim(0, 6)}
							/>
							<frame
								Key={'StateLayer'}
								AnchorPoint={new Vector2(0.5, 0.5)}
								Position={UDim2.fromScale(0.5, 0.5)}
								Size={new UDim2(1, 48, 1, 12)}
								BackgroundColor3={theme.Colors[`on${colorScheme}`]}
								BackgroundTransparency={this.stateBinding.map((opacity) => {
									return 1 - opacity;
								})}
							>
								<uicorner CornerRadius={new UDim(1, 0)} />
							</frame>
							<uicorner CornerRadius={new UDim(1, 0)} />
						</textbutton>
					);
				}}
			/>
		);
	}
}
