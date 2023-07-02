import Roact from '@rbxts/roact';
import { GothamMedium } from '../Fonts';
import Icon from '../Icon';
import { ColorScheme, LowerCaseColorScheme } from '../types';
import BaseButton from './BaseButton';

export default class OutlinedButtonBase extends BaseButton {
	render() {
		const theme = this.props.Theme;
		const colorScheme = this.props.ColorScheme || ColorScheme.Primary;
		const lowerCaseColorScheme = colorScheme.lower() as LowerCaseColorScheme;

		const color = this.props.CustomColorGroup
			? this.props.CustomColorGroup.color
			: theme.Scheme[lowerCaseColorScheme];

		const icon = this.props.Icon ? (
			<Icon
				Icon={this.props.Icon}
				IconColor={this.props.Disabled ? theme.Scheme.onBackground : color}
				IconTransparency={this.props.Disabled ? 1 - 0.38 : 0}
				Size={UDim2.fromScale(0.2, 1)}
			/>
		) : undefined;

		return (
			<textbutton
				AutoButtonColor={false}
				BackgroundTransparency={this.stateBinding.map((opacity) => {
					return 1 - opacity;
				})}
				BackgroundColor3={color}
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.Size}
				Text={''}
				AutomaticSize={this.props.AutomaticSize ? 'X' : undefined}
				Event={{
					MouseButton1Click: async () => this.MouseClick(),
					MouseButton1Up: () => this.MouseUp(),
					MouseEnter: () => this.MouseEnter(),
					MouseButton1Down: () => this.MouseDown(),
					MouseLeave: () => this.MouseLeave(),
				}}
			>
				<uipadding
					PaddingLeft={new UDim(0, this.props.Icon ? 16 : 24)}
					PaddingRight={new UDim(0, 24)}
					PaddingBottom={new UDim(0, 6)}
					PaddingTop={new UDim(0, 6)}
				/>
				<uicorner CornerRadius={new UDim(1, 0)} />
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Padding={new UDim(0, 8)}
				/>
				{icon}
				<textlabel
					Size={
						this.props.AutomaticSize
							? UDim2.fromScale(0, 1)
							: this.props.Icon
							? UDim2.fromScale(0.8, 1)
							: UDim2.fromScale(1, 1)
					}
					AutomaticSize={this.props.AutomaticSize ? Enum.AutomaticSize.X : undefined}
					BackgroundTransparency={1}
					FontFace={GothamMedium}
					TextColor3={this.props.Disabled ? theme.Scheme.onBackground : color}
					TextTransparency={this.props.Disabled ? 1 - 0.38 : 0}
					Text={this.props.Text}
					TextSize={14}
				/>
				<uistroke
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					Color={theme.Scheme.outline}
					Transparency={this.props.Disabled ? 1 - 0.12 : 0}
				/>
			</textbutton>
		);
	}
}
