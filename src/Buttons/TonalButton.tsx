import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import { ContainerScheme, LowerCaseContainerScheme } from '../Constants';
import { GothamMedium } from '../Fonts';
import Icon from '../Icon';
import { ThemeState, ThemeStore } from '../Theme/ThemeState';
import { LowerCaseFirstLetter } from '../Utils';
import BaseButton, { ContainerButtonProps } from './BaseButton';

class TonalButton extends BaseButton<ContainerButtonProps> {
	render() {
		const theme = this.props.Theme;
		const colorScheme = this.props.ColorScheme || ContainerScheme.SecondaryContainer;
		const lowerCaseColorScheme = LowerCaseFirstLetter(colorScheme) as LowerCaseContainerScheme;

		const icon = this.props.Icon ? (
			<Icon
				Icon={this.props.Icon}
				IconColor={this.props.Disabled ? theme.Scheme.onBackground : theme.Scheme[`on${colorScheme}`]}
				IconTransparency={this.props.Disabled ? 1 - 0.38 : 0}
				IconSize={'24p'}
				Size={UDim2.fromScale(0.2, 1)}
			/>
		) : undefined;

		return (
			<textbutton
				AutoButtonColor={false}
				BackgroundColor3={this.props.Disabled ? theme.Scheme.onSurface : theme.Scheme[lowerCaseColorScheme]}
				BackgroundTransparency={this.props.Disabled ? 1 - 0.12 : 0}
				BorderSizePixel={0}
				AnchorPoint={this.props.AnchorPoint}
				Position={this.props.Position}
				Size={this.props.AutomaticSize ? new UDim2(new UDim(0, 0), new UDim(0, 35)) : this.props.Size}
				Text={''}
				AutomaticSize={this.props.AutomaticSize ? Enum.AutomaticSize.X : undefined}
				Event={{
					MouseButton1Click: async () => this.MouseClick(),
					MouseButton1Up: () => this.MouseUp(),
					MouseEnter: () => this.MouseEnter(),
					MouseButton1Down: () => this.MouseDown(),
					MouseLeave: () => this.MouseLeave(),
				}}
			>
				<frame
					Key={'StateLayer'}
					Size={UDim2.fromScale(this.props.AutomaticSize ? 0 : 1, 1)}
					AutomaticSize={this.props.AutomaticSize ? Enum.AutomaticSize.X : undefined}
					BackgroundColor3={theme.Scheme[`on${colorScheme}`]}
					BackgroundTransparency={this.stateBinding.map((opacity) => {
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
						TextColor3={this.props.Disabled ? theme.Scheme.onBackground : theme.Scheme[`on${colorScheme}`]}
						TextTransparency={this.props.Disabled ? 1 - 0.38 : 0}
						Text={this.props.Text}
						TextSize={14}
					/>
				</frame>
				<uicorner CornerRadius={new UDim(1, 0)} />
			</textbutton>
		);
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, ContainerButtonProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(TonalButton);

export default class ThemedOutlinedButton extends Roact.Component<Omit<ContainerButtonProps, 'Theme'>> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
