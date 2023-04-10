import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import { ColorScheme, ContainerScheme, ThemeProps } from '../Types';
import { CustomColorGroup } from '../material-color';

export interface ButtonProps extends ThemeProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	AutomaticSize?: boolean;
	Text: string;
	Icon?: Icons | string;
	Disabled?: boolean;
	ColorScheme?: ColorScheme;
	CustomColorGroup?: CustomColorGroup['Colors'];
	Pressed: () => void;
}

export type ContainerButtonProps = Omit<ButtonProps, 'ColorScheme'> & { ColorScheme?: ContainerScheme };

export interface ButtonState {
	Debounce: boolean;
}

export default abstract class BaseButton<
	Props extends ButtonProps | ContainerButtonProps = ButtonProps,
> extends Roact.Component<Props, ButtonState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	state = {
		Debounce: false,
	};

	constructor(props: Props) {
		super(props);

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());
		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);
	}

	render(): Roact.Element | undefined {
		return undefined;
	}

	async MouseClick() {
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
	}

	MouseUp() {
		if (this.props.Disabled) return;
		this.stateMotor.setGoal(new Linear(0.08, { velocity: 0.5 }));
	}

	MouseDown() {
		if (this.props.Disabled) return;
		this.stateMotor.setGoal(new Linear(0.12, { velocity: 0.5 }));
	}

	MouseEnter() {
		if (this.props.Disabled) return;
		this.stateMotor.setGoal(new Linear(0.08, { velocity: 0.5 }));
	}

	MouseLeave() {
		if (this.props.Disabled) return;
		this.stateMotor.setGoal(new Linear(0, { velocity: 0.5 }));
	}
}
