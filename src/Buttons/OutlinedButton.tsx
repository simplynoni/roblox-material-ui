import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import { ColorScheme, LowerCaseColorScheme } from '../Constants';
import { GothamMedium } from '../Fonts';
import { Icons } from '../Icons';
import { ThemeState, ThemeStore } from '../Theme/ThemeState';
import { ThemeProps } from '../types';

interface OutlinedButtonProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	AutomaticSize?: boolean;
	Text: string;
	Icon?: Icons;
	Disabled?: boolean;
	ColorScheme?: ColorScheme;
	Pressed: () => void;
}

interface OutlinedButtonState {
	Debounce: boolean;
}

class OutlinedButton extends Roact.Component<OutlinedButtonProps & ThemeProps, OutlinedButtonState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	state = {
		Debounce: false,
	};

	constructor(props: OutlinedButtonProps & ThemeProps) {
		super(props);

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());
		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);
	}

	render() {
		const theme = this.props.Theme;
		const colorScheme = this.props.ColorScheme || ColorScheme.Primary;
		const lowerCaseColorScheme = colorScheme.lower() as LowerCaseColorScheme;

		return (
			<textbutton
				AutoButtonColor={false}
				BackgroundTransparency={this.stateBinding.map((opacity) => {
					return 1 - opacity;
				})}
				BackgroundColor3={theme.Scheme[lowerCaseColorScheme]}
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.AutomaticSize ? new UDim2(new UDim(0, 0), new UDim(0, 35)) : this.props.Size}
				FontFace={GothamMedium}
				Text={this.props.Text}
				TextColor3={this.props.Disabled ? theme.Scheme.onBackground : theme.Scheme[lowerCaseColorScheme]}
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
						// Why cant you just disable input on buttons 😭
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
				<uicorner CornerRadius={new UDim(1, 0)} />
				<uistroke
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					Color={theme.Scheme.outline}
					Transparency={this.props.Disabled ? 1 - 0.12 : 0}
				/>
				<uipadding
					PaddingLeft={new UDim(0, 24)}
					PaddingRight={new UDim(0, 24)}
					PaddingBottom={new UDim(0, 6)}
					PaddingTop={new UDim(0, 6)}
				/>
			</textbutton>
		);
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, OutlinedButtonProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(OutlinedButton);

export default class ThemedOutlinedButton extends Roact.Component<OutlinedButtonProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
