import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import { CustomColorGroup } from '../material-color';
import { ColorScheme, ContainerScheme } from '../types';

export interface ButtonRenderProps {
	StateMotor: SingleMotor;
	StateBinding: Roact.Binding<number>;
	MouseClick: () => Promise<void>;
	MouseUp: () => void;
	MouseDown: () => void;
	MouseEnter: () => void;
	MouseLeave: () => void;
}

export interface ButtonBaseProps {
	Disabled?: boolean;
	Pressed: () => void;
	Render: (props: ButtonRenderProps) => Roact.Element;
}

export interface ButtonProps extends Omit<ButtonBaseProps, 'Render'> {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	AutomaticSize?: boolean;
	Text: string;
	Icon?: Icons | string;
	ColorScheme?: ColorScheme;
	CustomColorGroup?: CustomColorGroup['Colors'];
}

export type ContainerButtonProps = ButtonProps & { ColorScheme?: ContainerScheme };

interface ButtonBaseState {
	Debounce: boolean;
}

export default class ButtonBase extends Roact.Component<ButtonBaseProps, ButtonBaseState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	constructor(props: ButtonBaseProps) {
		super(props);

		this.setState({ Debounce: false });

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());
		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);
	}

	public render(): Roact.Element | undefined {
		return this.props.Render({
			StateMotor: this.stateMotor,
			StateBinding: this.stateBinding,
			MouseClick: () => this.MouseClick(),
			MouseUp: () => this.MouseUp(),
			MouseDown: () => this.MouseDown(),
			MouseEnter: () => this.MouseEnter(),
			MouseLeave: () => this.MouseLeave(),
		});
	}

	async MouseClick() {
		if (this.props.Disabled) return;
		if (this.state.Debounce === false) {
			this.setState({
				Debounce: true,
			});

			task.spawn(this.props.Pressed);

			task.wait(0.25);
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
