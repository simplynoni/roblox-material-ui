import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';

import Icon from './Icon';
import { Icons } from './Icons';
import RoundedFrame from './RoundedFrame';
import { ThemeState, ThemeStore } from './Theme/ThemeState';
import { ThemeProps } from './types';

interface IconButtonProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size: UDim2;
	ZIndex?: number;
	LayoutOrder?: number;
	Icon: Icons | string;
	IconColor?: Color3;
	Pressed: () => void;
}

interface IconButtonState {
	Debounce: boolean;
}

class IconButton extends Roact.Component<IconButtonProps & ThemeProps, IconButtonState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	constructor(props: IconButtonProps & ThemeProps) {
		super(props);

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());

		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);

		this.setState({
			Debounce: false,
		});
	}

	render() {
		const theme = this.props.Theme;

		return (
			<textbutton
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size}
				ZIndex={this.props.ZIndex}
				LayoutOrder={this.props.LayoutOrder}
				AutoButtonColor={false}
				BackgroundTransparency={1}
				Text=''
				Event={{
					MouseButton1Click: async () => {
						if (this.state.Debounce === false) {
							this.setState({
								Debounce: true,
							});

							this.props.Pressed();

							await Promise.delay(0.25);
							this.setState({
								Debounce: false,
							});
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
				<uiaspectratioconstraint
					AspectRatio={1}
					AspectType={Enum.AspectType.ScaleWithParentSize}
					DominantAxis={Enum.DominantAxis.Height}
				/>
				<uicorner CornerRadius={new UDim(1)} />
				<Icon
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(0.75, 0.75)}
					Icon={this.props.Icon}
					IconSize='24p'
					IconColor={this.props.IconColor || theme.Scheme.onBackground}
				/>
				<RoundedFrame
					Key='StateLayer'
					CornerRadius='Full'
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
					Color={theme.Scheme.onBackground}
					Transparency={this.stateBinding.map((opacity) => {
						return 1 - opacity;
					})}
				/>
			</textbutton>
		);
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, IconButtonProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(IconButton);

export default class ThemedIconButton extends Roact.Component<IconButtonProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
