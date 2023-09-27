import { SingleMotor, Spring } from '@rbxts/flipper';
import Roact, { RefObject, createRef } from '@rbxts/roact';
import { GothamBold } from './Fonts';
import RoundedFrame from './RoundedFrame';
import { ColorScheme, LowerCaseColorScheme, ThemeProps } from './types';

interface ProgressBarProps extends ThemeProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	Label?: string;
	Value: number;
	ShowValue?: boolean;
	ColorScheme?: ColorScheme;
}

interface ProgressBarState {
	Value: number;
	HolderWidth: number;
}

export default class ProgressBar extends Roact.Component<ProgressBarProps, ProgressBarState> {
	protected state: Readonly<ProgressBarState> = { Value: this.props.Value, HolderWidth: 0 };

	private holderRef: RefObject<Frame>

	private valueMotor: SingleMotor;
	private valueBinding: Roact.Binding<number>;

	constructor(props: ProgressBarProps & ThemeProps) {
		super(props);

		this.holderRef = createRef()

		this.valueMotor = new SingleMotor(this.props.Value / 100);

		const [valueBinding, setValueBinding] = Roact.createBinding(this.valueMotor.getValue());
		this.valueBinding = valueBinding;

		this.valueMotor.onStep(setValueBinding);
	}

	render() {
		const theme = this.props.Theme;
		const colorScheme = this.props.ColorScheme || ColorScheme.Primary;
		const lowerCaseColorScheme = colorScheme.lower() as LowerCaseColorScheme;

		return (
			<RoundedFrame
				key={'ProgressBar'}
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size || new UDim2(1, 0, 0, 20)}
				Color={theme.Scheme[`${lowerCaseColorScheme}Container`]}
				BorderSizePixel={0}
				CornerRadius={'Full'}
				ref={this.holderRef}
			>
				{this.props.Label ? (
					<textlabel
						key={'Label'}
						AnchorPoint={new Vector2(0, 0.5)}
						Position={UDim2.fromScale(0, 0.5)}
						Size={UDim2.fromScale(0.75, 1)}
						BackgroundTransparency={1}
						FontFace={GothamBold}
						Text={this.props.Label}
						TextColor3={theme.Scheme[`on${colorScheme}Container`]}
						TextXAlignment={Enum.TextXAlignment.Left}
						TextScaled
					>
						<uipadding
							PaddingBottom={new UDim(0, 1)}
							PaddingTop={new UDim(0, 1)}
							PaddingLeft={new UDim(0, 8)}
						/>
					</textlabel>
				) : undefined}
				{this.props.ShowValue ? (
					<textlabel
						key={'Value'}
						AnchorPoint={new Vector2(1, 0.5)}
						Position={UDim2.fromScale(1, 0.5)}
						Size={UDim2.fromScale(0.25, 1)}
						BackgroundTransparency={1}
						FontFace={GothamBold}
						Text={tostring(this.state.Value)}
						TextColor3={theme.Scheme[`on${colorScheme}Container`]}
						TextXAlignment={Enum.TextXAlignment.Right}
						TextScaled
					>
						<uipadding
							PaddingBottom={new UDim(0, 1)}
							PaddingTop={new UDim(0, 1)}
							PaddingRight={new UDim(0, 8)}
						/>
					</textlabel>
				) : undefined}
				{/* need to make a RoundedCanvasGroup component at some point */}
				<canvasgroup
					key={'Filler'}
					AnchorPoint={new Vector2(0, 0.5)}
					Position={UDim2.fromScale(0, 0.5)}
					Size={this.valueBinding.map((value) => {
						return UDim2.fromScale(math.clamp(value, 0, 1), 1);
					})}
					BackgroundColor3={theme.Scheme[lowerCaseColorScheme]}
					BorderSizePixel={0}
				>
					<uicorner CornerRadius={new UDim(0.5, 0)} />
					{this.props.Label ? (
						<textlabel
							key={'Label'}
							AnchorPoint={new Vector2(0, 0.5)}
							Position={UDim2.fromScale(0, 0.5)}
							Size={new UDim2(0, this.state.HolderWidth * 0.75, 1, 0)}
							BackgroundTransparency={1}
							FontFace={GothamBold}
							Text={this.props.Label}
							TextColor3={theme.Scheme[`on${colorScheme}`]}
							TextXAlignment={Enum.TextXAlignment.Left}
							TextScaled
						>
							<uipadding
								PaddingBottom={new UDim(0, 1)}
								PaddingTop={new UDim(0, 1)}
								PaddingLeft={new UDim(0, 8)}
							/>
						</textlabel>
					) : undefined}
					{this.props.ShowValue ? (
						<textlabel
							key={'Value'}
							AnchorPoint={new Vector2(1, 0.5)}
							Position={new UDim2(0, this.state.HolderWidth, 0.5, 0)}
							Size={UDim2.fromScale(0.25, 1)}
							BackgroundTransparency={1}
							FontFace={GothamBold}
							Text={tostring(this.state.Value)}
							TextColor3={theme.Scheme[`on${colorScheme}`]}
							TextXAlignment={Enum.TextXAlignment.Right}
							TextScaled
						>
							<uipadding
								PaddingBottom={new UDim(0, 1)}
								PaddingTop={new UDim(0, 1)}
								PaddingRight={new UDim(0, 8)}
							/>
						</textlabel>
					) : undefined}
				</canvasgroup>
			</RoundedFrame>
		);
	}

	setValue(value: number) {
		this.valueMotor.setGoal(new Spring(value / 100, { frequency: 1, dampingRatio: 0.75 }));

		this.setState({ Value: value });
	}

	protected didMount(): void {
		coroutine.wrap(() => {
			task.wait(0.01);
			const holder = this.holderRef.current

			if (holder) {
				this.setState({
					HolderWidth: holder.AbsoluteSize.X,
				});
			}
		})();
	}

	protected didUpdate(previousProps: ProgressBarProps, previousState: ProgressBarState): void {
		if (this.props.Value !== this.state.Value) {
			this.setValue(this.props.Value);
		}

		const holder = this.holderRef.current

		if (holder && holder.AbsoluteSize.X !== this.state.HolderWidth) {
			this.setState({
				HolderWidth: holder.AbsoluteSize.X,
			});
		}
	}
}
