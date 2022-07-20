import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import ThemeContext from './Theme/ThemeContext';

import Icon from './Icon';
import { Px24 } from './Icons';
import RoundedFrame from './RoundedFrame';

interface IconButtonProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size: UDim2;
	ZIndex?: number;
	LayoutOrder?: number;
	Icon: Px24;
	Pressed: () => void;
}

interface IconButtonState {
	Debounce: boolean;
}

export default class IconButton extends Roact.Component<IconButtonProps, IconButtonState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	constructor(props: IconButtonProps) {
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
		return (
			<ThemeContext.Consumer
				render={(theme) => {
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
								IconColor={theme.Colors.onBackground}
							/>
							<RoundedFrame
								Key='StateLayer'
								CornerRadius='Full'
								AnchorPoint={new Vector2(0.5, 0.5)}
								Position={UDim2.fromScale(0.5, 0.5)}
								Size={UDim2.fromScale(1, 1)}
								Color={theme.Colors.onBackground}
								Transparency={this.stateBinding.map((opacity) => {
									return 1 - opacity;
								})}
							/>
						</textbutton>
					);
				}}
			/>
		);
	}
}
