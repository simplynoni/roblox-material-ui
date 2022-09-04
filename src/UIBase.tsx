import { GroupMotor, Linear, SingleMotor } from '@rbxts/flipper';
import { useSelector } from '@rbxts/hook-bag';
import Maid from '@rbxts/maid';
import Roact from '@rbxts/roact';
import Hooks from '@rbxts/roact-hooks';
import { StoreProvider } from '@rbxts/roact-rodux';
import RoundedFrame from './RoundedFrame';
import Shadow from './Shadow';
import { ThemeState, ThemeStore } from './Theme/ThemeState';

interface UIBaseProps {
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

const defaults = {
	positionVelocity: 1,
	fadeVelocity: 7,
};

// Couldnt think of a better name lol
const UIBaseBase: Hooks.FC<UIBaseProps> = (props, hooks) => {
	const theme = useSelector((state: ThemeState) => state)(hooks);
	const [closed, setClosed] = hooks.useState(props.Closed ?? false);
	const [visible, setVisible] = hooks.useState(!props.Closed ?? true);

	const [positionBinding, positionMotor] = hooks.useMemo(() => {
		const positionMotor = new GroupMotor(
			props.Closed
				? {
						X: props.CustomClosePosition
							? props.CustomClosePosition.X
							: props.Position.X.Scale >= 0.5
							? props.Position.X.Scale + 0.2
							: props.Position.X.Scale - 0.2,
						Y: props.Position.Y.Scale,
				  }
				: { X: props.Position.X.Scale, Y: props.Position.Y.Scale },
		);

		const [positionBinding, setPositionBinding] = Roact.createBinding(positionMotor.getValue());
		positionMotor.onStep(setPositionBinding);

		return [positionBinding, positionMotor] as LuaTuple<
			[Roact.Binding<{ X: number; Y: number }>, GroupMotor<{ X: number; Y: number }>]
		>;
	}, []);

	const [fadeBinding, fadeMotor] = hooks.useMemo(() => {
		const fadeMotor = new SingleMotor(1);

		const [fadeBinding, setFadeBinding] = Roact.createBinding(fadeMotor.getValue());
		fadeMotor.onStep(setFadeBinding);

		return [fadeBinding, fadeMotor] as LuaTuple<[Roact.Binding<number>, SingleMotor]>;
	}, []);

	hooks.useEffect(() => {
		const maid = new Maid();

		if (props.Closed === false) {
			setClosed(props.Closed);
			setVisible(!props.Closed);

			positionMotor.setGoal({
				X: new Linear(props.Position.X.Scale, {
					velocity: props.PositionVelocity || defaults.positionVelocity,
				}),
				Y: new Linear(props.Position.Y.Scale, {
					velocity: props.PositionVelocity || defaults.positionVelocity,
				}),
			});

			fadeMotor.setGoal(new Linear(1, { velocity: props.FadeVelocity || defaults.fadeVelocity }));
		} else if (props.Closed === true) {
			setClosed(props.Closed);

			positionMotor.setGoal({
				X: new Linear(
					props.CustomClosePosition
						? props.CustomClosePosition.X
						: props.Position.X.Scale >= 0.5
						? props.Position.X.Scale + 0.2
						: props.Position.X.Scale - 0.2, // 💀
					{ velocity: props.PositionVelocity || defaults.positionVelocity },
				),
				Y: new Linear(props.CustomClosePosition ? props.CustomClosePosition.Y : props.Position.Y.Scale, {
					velocity: props.PositionVelocity || defaults.positionVelocity,
				}),
			});

			fadeMotor.setGoal(new Linear(0, { velocity: props.FadeVelocity || defaults.fadeVelocity }));

			const onComplete = positionMotor.onComplete(() => {
				// UI could've opened again before the animation finished
				if (closed) {
					setVisible(false);
				}

				maid.DoCleaning();
			});

			maid.GiveTask(() => onComplete.disconnect());
		}
	}, [props.Closed]);

	const aspectRatio = props.AspectRatio ? (
		<uiaspectratioconstraint
			Key='AspectRatio'
			AspectRatio={props.AspectRatio}
			AspectType={props.AspectType || Enum.AspectType.ScaleWithParentSize}
			DominantAxis={props.DominantAxis || Enum.DominantAxis.Width}
		/>
	) : undefined;

	const sizeConstraint =
		props.MaxSize || props.MinSize ? (
			<uisizeconstraint Key='SizeConstraint' MaxSize={props.MaxSize} MinSize={props.MinSize} />
		) : undefined;

	return (
		<frame
			Key='OuterContainer'
			AnchorPoint={props.AnchorPoint}
			Position={positionBinding.map(({ X, Y }) => {
				return new UDim2(X, props.Position.X.Offset, Y, props.Position.Y.Offset);
			})}
			Size={props.Size}
			BackgroundTransparency={1}
			Visible={visible}
		>
			<Shadow
				Elevation={5}
				Transparency={fadeBinding.map((opacity) => {
					return 1 - opacity;
				})}
			/>
			<canvasgroup
				Key='InnerContainer'
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(1, 1)}
				BackgroundTransparency={1}
				GroupTransparency={fadeBinding.map((opacity) => {
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
					{props[Roact.Children]}
				</RoundedFrame>
			</canvasgroup>
			{aspectRatio}
			{sizeConstraint}
		</frame>
	);
};

const UIBaseHooks = new Hooks(Roact)(UIBaseBase);

export default class UIBase extends Roact.Component<UIBaseProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<UIBaseHooks {...this.props} />
			</StoreProvider>
		);
	}
}
