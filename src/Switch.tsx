import { GroupMotor, Linear } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { StoreProvider, connect } from '@rbxts/roact-rodux';

import RoundedFrame from './RoundedFrame';
import { ThemeState, ThemeStore } from './Theme/ThemeState';
import { ThemeProps } from './Types';

interface SwitchProps {
	Enabled: boolean;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	OnEvent?: () => void;
	OffEvent?: () => void;
	ChangedEvent?: (Enabled: boolean) => void;
}

interface SwitchState {
	Enabled: boolean;
	Debounce: boolean;
}

class Switch extends Roact.PureComponent<SwitchProps & ThemeProps, SwitchState> {
	positionMotor: GroupMotor<{ Position: number; AnchorPoint: number }>;
	positionBinding: Roact.Binding<{ Position: number; AnchorPoint: number }>;

	constructor(props: SwitchProps & ThemeProps) {
		super(props);

		this.positionMotor = new GroupMotor({
			Position: this.props.Enabled ? 1 : 0,
			AnchorPoint: this.props.Enabled ? 1 : 0,
		});

		const [positionBinding, setPositionBinding] = Roact.createBinding(this.positionMotor.getValue());

		this.positionBinding = positionBinding;

		this.positionMotor.onStep(setPositionBinding);

		this.setState({
			Enabled: this.props.Enabled,
			Debounce: false,
		});
	}

	render() {
		const theme = this.props.Theme;

		return (
			<textbutton
				Key='Track'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={UDim2.fromOffset(50, 28)}
				BackgroundColor3={this.state.Enabled ? theme.Scheme.primary : theme.Scheme.surfaceVariant}
				AutoButtonColor={false}
				Text=''
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: async () => {
						if (this.state.Debounce === false) {
							this.setState({
								Debounce: true,
							});

							this.setEnabled(!this.state.Enabled);

							await Promise.delay(0.25);
							this.setState({
								Debounce: false,
							});
						}
					},
				}}
			>
				{!this.state.Enabled ? (
					<uistroke
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
						Color={theme.Scheme.outline}
						Thickness={2}
					/>
				) : undefined}
				<uicorner Key='Corner' CornerRadius={new UDim(1, 0)} />
				<uipadding
					Key='Padding'
					PaddingBottom={new UDim(0, 4)}
					PaddingLeft={new UDim(0, 5)}
					PaddingRight={new UDim(0, 4)}
					PaddingTop={new UDim(0, 4)}
				/>
				<RoundedFrame
					Key='Thumb'
					AnchorPoint={this.positionBinding.map(({ AnchorPoint }) => {
						return new Vector2(AnchorPoint, 0.5);
					})}
					Position={this.positionBinding.map(({ Position }) => {
						return UDim2.fromScale(Position, 0.5);
					})}
					Size={this.state.Enabled ? UDim2.fromOffset(24, 24) : UDim2.fromOffset(16, 16)}
					CornerRadius='Full'
					Color={this.state.Enabled ? theme.Scheme.onPrimary : theme.Scheme.outline}
				>
					<uiaspectratioconstraint
						Key='AspectRatio'
						AspectRatio={1}
						AspectType={Enum.AspectType.ScaleWithParentSize}
						DominantAxis={Enum.DominantAxis.Height}
					/>
				</RoundedFrame>
			</textbutton>
		);
	}

	private setEnabled(enabled: boolean) {
		if (this.state.Enabled !== enabled) {
			if (this.props.ChangedEvent) this.props.ChangedEvent(enabled);

			if (this.state.Enabled === false) {
				if (this.props.OnEvent) this.props.OnEvent();
			} else {
				if (this.props.OffEvent) this.props.OffEvent();
			}
			this.setState({
				Enabled: enabled,
			});

			this.positionMotor.setGoal({
				Position: new Linear(enabled ? 1 : 0, { velocity: 10 }),
				AnchorPoint: new Linear(enabled ? 1 : 0, { velocity: 10 }),
			});
		}
	}

	protected didUpdate(previousProps: SwitchProps): void {
		if (this.props.Enabled !== previousProps.Enabled) {
			this.setEnabled(this.props.Enabled);
		}
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, SwitchProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(Switch);

export default class ThemedSwitch extends Roact.Component<SwitchProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
