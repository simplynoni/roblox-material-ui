import Roact from '@rbxts/roact';
import RoundedFrame from './RoundedFrame';

import { SingleMotor, Spring } from '@rbxts/flipper';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import { UserInputService } from '@rbxts/services';
import { ThemeState, ThemeStore } from './Theme/ThemeState';
import { ThemeProps } from './Types';

interface SliderProps {
	Value: number;
	Steps?: number;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	LayoutOrder?: number;
	ChangedEvent?: (Value: number) => void;
}

interface SliderState {
	Value: number;
}

class Slider extends Roact.PureComponent<SliderProps & ThemeProps, SliderState> {
	railRef: Roact.Ref<Frame>;

	dragMotor: SingleMotor;
	dragBinding: Roact.Binding<number>;

	constructor(props: SliderProps & ThemeProps) {
		super(props);

		this.railRef = Roact.createRef<Frame>();

		this.setState({
			Value: this.props.Value,
		});

		this.dragMotor = new SingleMotor(this.props.Value);

		const [dragBinding, setDragBinding] = Roact.createBinding(this.dragMotor.getValue());
		this.dragBinding = dragBinding;

		this.dragMotor.onStep(setDragBinding);
	}

	render() {
		const theme = this.props.Theme;

		return (
			<frame
				Key='Slider'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size ?? new UDim2(1, 0, 0, 15)}
				BackgroundTransparency={1}
				LayoutOrder={this.props.LayoutOrder}
			>
				<textbutton
					Key='Thumb'
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={this.dragBinding.map((value) => {
						return UDim2.fromScale(value, 0.5);
					})}
					Size={new UDim2(0, 15, 1, 0)}
					BorderSizePixel={0}
					BackgroundColor3={theme.Scheme.primary}
					AutoButtonColor={false}
					Text=''
					Event={{
						InputBegan: (_, input) => {
							if (
								input.UserInputType !== Enum.UserInputType.MouseButton1 &&
								input.UserInputType !== Enum.UserInputType.Touch
							)
								return;

							const slider = this.railRef.getValue();

							if (!slider) return;

							let dragging = true;
							const stopDrag = input.GetPropertyChangedSignal('UserInputState').Connect(() => {
								if (input.UserInputState === Enum.UserInputState.End) {
									dragging = false;
								}
							});

							while (dragging) {
								const mousePos = UserInputService.GetMouseLocation().X;
								const pos = slider.AbsolutePosition.X;
								const size = slider.AbsoluteSize.X;
								let relative = math.clamp((mousePos - pos) / size, 0, 1);
								if (this.props.Steps) {
									relative = math.round(relative * this.props.Steps) / this.props.Steps;
								}

								this.setValue(relative);
								task.wait();
							}

							stopDrag.Disconnect();
						},
					}}
				>
					<uicorner CornerRadius={new UDim(0.5, 0)} />
					<uiaspectratioconstraint AspectRatio={1} />
				</textbutton>
				<textbutton
					Key='Hitbox'
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
					BackgroundTransparency={1}
					Text=''
					Event={{
						InputBegan: (_, input) => {
							if (
								input.UserInputType !== Enum.UserInputType.MouseButton1 &&
								input.UserInputType !== Enum.UserInputType.Touch
							)
								return;

							const slider = this.railRef.getValue();

							if (!slider) return;

							const mousePos = UserInputService.GetMouseLocation().X;
							const pos = slider.AbsolutePosition.X;
							const size = slider.AbsoluteSize.X;
							let relative = math.clamp((mousePos - pos) / size, 0, 1);
							if (this.props.Steps) {
								relative = math.round(relative * this.props.Steps) / this.props.Steps;
							}

							this.setValue(relative);
						},
					}}
				/>
				<RoundedFrame
					Key='Rail'
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={new UDim2(1, 0, 0, 3)}
					CornerRadius='Full'
					Color={theme.Scheme.secondaryContainer}
					Ref={this.railRef}
				>
					<RoundedFrame
						Key='Filler'
						AnchorPoint={new Vector2(0, 0.5)}
						Position={UDim2.fromScale(0, 0.5)}
						Size={this.dragBinding.map((value) => {
							return UDim2.fromScale(value, 1);
						})}
						CornerRadius='Full'
						Color={theme.Scheme.primary}
					/>
				</RoundedFrame>
			</frame>
		);
	}

	private setValue(value: number) {
		if (this.state.Value === value) return;

		if (this.props.ChangedEvent) {
			task.spawn(this.props.ChangedEvent, value);
		}

		this.dragMotor.setGoal(new Spring(value, { frequency: 2, dampingRatio: 0.75 }));

		this.setState({
			Value: value,
		});
	}

	protected didUpdate(previousProps: SliderProps): void {
		if (this.props.Value !== previousProps.Value) {
			this.setValue(this.props.Value);
		}
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, SliderProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(Slider);

export default class ThemedSlider extends Roact.Component<SliderProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
