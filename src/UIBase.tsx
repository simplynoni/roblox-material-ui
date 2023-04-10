import { GroupMotor, Linear, SingleMotor } from '@rbxts/flipper';
import Maid from '@rbxts/maid';
import Roact from '@rbxts/roact';

import RoundedFrame from './RoundedFrame';
import Shadow from './Shadow';
import { ThemeProps } from './Types';

interface UIBaseProps extends ThemeProps {
	AnchorPoint: Vector2;
	Position: UDim2;
	Size: UDim2;
	AspectRatio?: number;
	AspectType?: Enum.AspectType;
	DominantAxis?: Enum.DominantAxis;
	MaxSize?: Vector2;
	MinSize?: Vector2;
	Closed?: boolean;
	CustomClosePosition?: Vector2;
	PositionVelocity?: number;
	FadeVelocity?: number;
}

interface UIBaseState {
	Closed: boolean;
	Visible: boolean;
}

const defaults = {
	positionVelocity: 1,
	fadeVelocity: 7,
};

export default class UIBase extends Roact.Component<UIBaseProps, UIBaseState> {
	positionMotor: GroupMotor<{ X: number; Y: number }>;
	positionBinding: Roact.Binding<{ X: number; Y: number }>;
	fadeMotor: SingleMotor;
	fadeBinding: Roact.Binding<number>;

	constructor(props: UIBaseProps) {
		super(props);

		this.positionMotor = new GroupMotor(
			this.props.Closed
				? {
						X: this.props.CustomClosePosition
							? this.props.CustomClosePosition.X
							: this.props.Position.X.Scale >= 0.5
							? this.props.Position.X.Scale + 0.2
							: this.props.Position.X.Scale - 0.2,
						Y: props.Position.Y.Scale,
				  }
				: { X: props.Position.X.Scale, Y: props.Position.Y.Scale },
		);

		const [positionBinding, setPositionBinding] = Roact.createBinding(this.positionMotor.getValue());
		this.positionBinding = positionBinding;

		this.positionMotor.onStep(setPositionBinding);

		this.fadeMotor = new SingleMotor(1);

		const [fadeBinding, setFadeBinding] = Roact.createBinding(this.fadeMotor.getValue());
		this.fadeBinding = fadeBinding;

		this.fadeMotor.onStep(setFadeBinding);

		this.setState({
			Closed: this.props.Closed ?? false,
			Visible: !this.props.Closed ?? true,
		});
	}

	render() {
		const theme = this.props.Theme;

		const aspectRatio = this.props.AspectRatio ? (
			<uiaspectratioconstraint
				Key='AspectRatio'
				AspectRatio={this.props.AspectRatio}
				AspectType={this.props.AspectType || Enum.AspectType.ScaleWithParentSize}
				DominantAxis={this.props.DominantAxis || Enum.DominantAxis.Width}
			/>
		) : undefined;

		const sizeConstraint =
			this.props.MaxSize || this.props.MinSize ? (
				<uisizeconstraint Key='SizeConstraint' MaxSize={this.props.MaxSize} MinSize={this.props.MinSize} />
			) : undefined;

		return (
			<frame
				Key='OuterContainer'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.positionBinding.map(({ X, Y }) => {
					return new UDim2(X, this.props.Position.X.Offset, Y, this.props.Position.Y.Offset);
				})}
				Size={this.props.Size}
				BackgroundTransparency={1}
				Visible={this.state.Visible}
			>
				<Shadow
					Elevation={5}
					Transparency={this.fadeBinding.map((opacity) => {
						return 1 - opacity;
					})}
				/>
				<canvasgroup
					Key='InnerContainer'
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
					BackgroundTransparency={1}
					GroupTransparency={this.fadeBinding.map((opacity) => {
						return 1 - opacity;
					})}
				>
					<RoundedFrame
						Key='Main'
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromScale(1, 1)}
						Color={theme.Scheme.background}
						CornerRadius={16}
					>
						{this.props[Roact.Children]}
					</RoundedFrame>
				</canvasgroup>
				{aspectRatio}
				{sizeConstraint}
			</frame>
		);
	}

	private setClosed(closed: boolean) {
		if (this.state.Closed === closed) return;

		const maid = new Maid();

		if (closed === false) {
			this.setState({
				Closed: closed,
				Visible: !closed,
			});

			this.positionMotor.setGoal({
				X: new Linear(this.props.Position.X.Scale, {
					velocity: this.props.PositionVelocity || defaults.positionVelocity,
				}),
				Y: new Linear(this.props.Position.Y.Scale, {
					velocity: this.props.PositionVelocity || defaults.positionVelocity,
				}),
			});

			this.fadeMotor.setGoal(new Linear(1, { velocity: this.props.FadeVelocity || defaults.fadeVelocity }));
		} else {
			this.setState({
				Closed: closed,
			});

			this.positionMotor.setGoal({
				X: new Linear(
					this.props.CustomClosePosition
						? this.props.CustomClosePosition.X
						: this.props.Position.X.Scale >= 0.5
						? this.props.Position.X.Scale + 0.2
						: this.props.Position.X.Scale - 0.2, // 💀
					{ velocity: this.props.PositionVelocity || defaults.positionVelocity },
				),
				Y: new Linear(
					this.props.CustomClosePosition ? this.props.CustomClosePosition.Y : this.props.Position.Y.Scale,
					{ velocity: this.props.PositionVelocity || defaults.positionVelocity },
				),
			});

			this.fadeMotor.setGoal(new Linear(0, { velocity: this.props.FadeVelocity || defaults.fadeVelocity }));

			const onComplete = this.positionMotor.onComplete(() => {
				// UI could've opened again before the animation finished
				if (this.state.Closed) {
					this.setState({
						Visible: false,
					});
				}

				maid.DoCleaning();
			});

			maid.GiveTask(() => onComplete.disconnect());
		}
	}

	protected didUpdate(previousProps: UIBaseProps): void {
		if (this.props.Closed !== undefined && previousProps.Closed !== this.props.Closed) {
			this.setClosed(this.props.Closed);
		}
	}
}
