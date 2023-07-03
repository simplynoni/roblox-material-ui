import { Linear, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';

import { Gotham, GothamBold } from './Fonts';
import Icon from './Icon';
import { Icons } from './Icons';
import Switch from './Switch';
import { ThemeProps } from './types';

interface SwitchTileProps extends ThemeProps {
	Enabled: boolean;
	Title: string;
	Icon?: Icons;
	Description?: string;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	OnEvent?: () => void;
	OffEvent?: () => void;
	ChangedEvent?: (Enabled: boolean) => void;
}

interface SwitchTileState {
	Enabled: boolean;
	Debounce: boolean;
	Icon?: Icons;
}

export default class SwitchTile extends Roact.PureComponent<SwitchTileProps, SwitchTileState> {
	stateMotor: SingleMotor;
	stateBinding: Roact.Binding<number>;

	constructor(props: SwitchTileProps) {
		super(props);

		this.stateMotor = new SingleMotor(0);

		const [stateBinding, setStateBinding] = Roact.createBinding(this.stateMotor.getValue());

		this.stateBinding = stateBinding;

		this.stateMotor.onStep(setStateBinding);

		this.setState({
			Enabled: this.props.Enabled,
			Debounce: false,
			Icon: this.props.Icon!,
		});
	}

	render() {
		const theme = this.props.Theme;

		return (
			<textbutton
				Key='SwitchTile'
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size ?? new UDim2(1, 0, 0, 72)}
				Text=''
				BorderSizePixel={0}
				BackgroundTransparency={this.stateBinding.map((opacity) => {
					return 1 - opacity;
				})}
				BackgroundColor3={theme.Scheme.onBackground}
				AutoButtonColor={false}
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
				<uipadding
					PaddingBottom={new UDim(0, 12)}
					PaddingLeft={new UDim(0, 16)}
					PaddingRight={new UDim(0, 16)}
					PaddingTop={new UDim(0, 12)}
				/>
				<frame
					Key='LeftAlign'
					AnchorPoint={new Vector2(0, 0.5)}
					Position={UDim2.fromScale(0, 0.5)}
					Size={UDim2.fromScale(0.75, 1)}
					BackgroundTransparency={1}
				>
					<uilistlayout
						Padding={new UDim(0, 16)}
						FillDirection={Enum.FillDirection.Horizontal}
						HorizontalAlignment={Enum.HorizontalAlignment.Left}
						VerticalAlignment={Enum.VerticalAlignment.Center}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>
					{this.state.Icon ? (
						<Icon
							Icon={this.state.Icon}
							IconSize='24p'
							MaxSize
							IconColor={theme.Scheme.onBackground}
							Size={UDim2.fromScale(0.25, 1)}
							LayoutOrder={1}
						/>
					) : undefined}
					<frame
						Key='TextHolder'
						Size={UDim2.fromScale(this.state.Icon ? 0.8 : 1, 1)}
						BackgroundTransparency={1}
						LayoutOrder={2}
					>
						<uilistlayout
							Padding={new UDim(0, 5)}
							FillDirection={Enum.FillDirection.Vertical}
							HorizontalAlignment={Enum.HorizontalAlignment.Left}
							VerticalAlignment={Enum.VerticalAlignment.Center}
							SortOrder={Enum.SortOrder.LayoutOrder}
						/>
						<textlabel
							Key='Title'
							LayoutOrder={1}
							Size={UDim2.fromScale(1, 0.45)}
							BackgroundTransparency={1}
							FontFace={GothamBold}
							Text={this.props.Title}
							TextColor3={theme.Scheme.onBackground}
							TextXAlignment={Enum.TextXAlignment.Left}
							TextScaled
						>
							<uitextsizeconstraint MaxTextSize={18} />
						</textlabel>
						{this.props.Description ? (
							<textlabel
								Key='Description'
								LayoutOrder={2}
								Size={UDim2.fromScale(1, 0.35)}
								BackgroundTransparency={1}
								FontFace={Gotham}
								Text={this.props.Description}
								TextColor3={theme.Scheme.onBackground}
								TextXAlignment={Enum.TextXAlignment.Left}
								TextScaled
							>
								<uitextsizeconstraint MaxTextSize={14} />
							</textlabel>
						) : undefined}
					</frame>
				</frame>
				<Switch
					Theme={theme}
					Enabled={this.state.Enabled}
					AnchorPoint={new Vector2(1, 0.5)}
					Position={UDim2.fromScale(1, 0.5)}
					ChangedEvent={(enabled) => {
						this.setEnabled(enabled);
					}}
				/>
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
		}
	}

	protected didUpdate(previousProps: SwitchTileProps): void {
		if (this.props.Enabled !== previousProps.Enabled) {
			this.setEnabled(this.props.Enabled);
		}

		if (this.props.Icon !== previousProps.Icon) {
			this.setState({
				Icon: this.props.Icon!,
			});
		}
	}
}
