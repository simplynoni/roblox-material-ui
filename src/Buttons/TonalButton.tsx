import Roact from '@rbxts/roact';
import { GothamMedium } from '../Fonts';
import Icon from '../Icon';
import { LowerCaseFirstLetter } from '../Utils';
import { ContainerScheme, LowerCaseContainerScheme, ThemeProps } from '../types';
import ButtonBase, { ContainerButtonProps } from './ButtonBase';

export default class TonalButtonBase extends Roact.Component<ContainerButtonProps & ThemeProps> {
	render() {
		const theme = this.props.Theme;
		const colorScheme = this.props.ColorScheme || ContainerScheme.SecondaryContainer;
		const lowerCaseColorScheme = LowerCaseFirstLetter(colorScheme) as LowerCaseContainerScheme;

		const color = this.props.CustomColorGroup
			? this.props.CustomColorGroup.colorContainer
			: theme.Scheme[lowerCaseColorScheme];
		const onColor = this.props.CustomColorGroup
			? this.props.CustomColorGroup.onColorContainer
			: theme.Scheme[`on${colorScheme}`];

		const icon = this.props.Icon ? (
			<Icon
				Icon={this.props.Icon}
				IconColor={this.props.Disabled ? theme.Scheme.onBackground : onColor}
				IconTransparency={this.props.Disabled ? 1 - 0.38 : 0}
				IconSize={'24p'}
				Size={UDim2.fromScale(0.2, 1)}
			/>
		) : undefined;

		return (
			<ButtonBase
				Disabled={this.props.Disabled}
				Pressed={this.props.Pressed}
				Render={(renderProps) => {
					return (
						<textbutton
							AutoButtonColor={false}
							BackgroundColor3={this.props.Disabled ? theme.Scheme.onSurface : color}
							BackgroundTransparency={this.props.Disabled ? 1 - 0.12 : 0}
							BorderSizePixel={0}
							AnchorPoint={this.props.AnchorPoint}
							Position={this.props.Position}
							Size={this.props.Size ?? UDim2.fromOffset(0, 35)}
							Text={''}
							AutomaticSize={this.props.AutomaticSize ? Enum.AutomaticSize.X : undefined}
							Interactable={!this.props.Disabled}
							Event={{
								MouseButton1Click: async () => renderProps.MouseClick(),
								MouseButton1Up: () => renderProps.MouseUp(),
								MouseEnter: () => renderProps.MouseEnter(),
								MouseButton1Down: () => renderProps.MouseDown(),
								MouseLeave: () => renderProps.MouseLeave(),
							}}
						>
							<frame
								key={'StateLayer'}
								Size={UDim2.fromScale(this.props.AutomaticSize ? 0 : 1, 1)}
								AutomaticSize={this.props.AutomaticSize ? Enum.AutomaticSize.X : undefined}
								BackgroundColor3={onColor}
								BackgroundTransparency={renderProps.StateBinding.map((opacity) => {
									return 1 - opacity;
								})}
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
									TextColor3={this.props.Disabled ? theme.Scheme.onBackground : onColor}
									TextTransparency={this.props.Disabled ? 1 - 0.38 : 0}
									Text={this.props.Text}
									TextSize={14}
								/>
							</frame>
							<uicorner CornerRadius={new UDim(1, 0)} />
						</textbutton>
					);
				}}
			/>
		);
	}
}
