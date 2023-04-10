import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import RoundedFrame from '../RoundedFrame';
import Shadow from '../Shadow';
import { ThemeState, ThemeStore } from '../Theme/ThemeState';
import { ThemeProps } from '../Types';

class StoryComponent extends Roact.Component<ThemeProps> {
	protected state: Readonly<{ Closed: boolean }> = { Closed: false };

	public render(): Roact.Element | undefined {
		const theme = this.props.Theme;

		return (
			<>
				<uigridlayout
					VerticalAlignment={Enum.VerticalAlignment.Center}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					CellSize={UDim2.fromOffset(150, 150)}
					CellPadding={UDim2.fromOffset(24, 24)}
				/>
				<frame BackgroundTransparency={1}>
					<Shadow Elevation={1} />
					<RoundedFrame
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromScale(1, 1)}
						Color={theme.Scheme.background}
						CornerRadius={16}
					>
						<textlabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.5, 0.5)}
							BackgroundTransparency={1}
							Text='Elevation 1'
							Font={Enum.Font.GothamBold}
							TextSize={16}
							TextTransparency={0.5}
							TextColor3={theme.Scheme.onBackground}
						/>
					</RoundedFrame>
				</frame>
				<frame BackgroundTransparency={1}>
					<Shadow Elevation={2} />
					<RoundedFrame
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromScale(1, 1)}
						Color={theme.Scheme.background}
						CornerRadius={16}
					>
						<textlabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.5, 0.5)}
							BackgroundTransparency={1}
							Text='Elevation 2'
							Font={Enum.Font.GothamBold}
							TextSize={16}
							TextTransparency={0.5}
							TextColor3={theme.Scheme.onBackground}
						/>
					</RoundedFrame>
				</frame>
				<frame BackgroundTransparency={1}>
					<Shadow Elevation={3} />
					<RoundedFrame
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromScale(1, 1)}
						Color={theme.Scheme.background}
						CornerRadius={16}
					>
						<textlabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.5, 0.5)}
							BackgroundTransparency={1}
							Text='Elevation 3'
							Font={Enum.Font.GothamBold}
							TextSize={16}
							TextTransparency={0.5}
							TextColor3={theme.Scheme.onBackground}
						/>
					</RoundedFrame>
				</frame>
				<frame BackgroundTransparency={1}>
					<Shadow Elevation={4} />
					<RoundedFrame
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromScale(1, 1)}
						Color={theme.Scheme.background}
						CornerRadius={16}
					>
						<textlabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.5, 0.5)}
							BackgroundTransparency={1}
							Text='Elevation 4'
							Font={Enum.Font.GothamBold}
							TextSize={16}
							TextTransparency={0.5}
							TextColor3={theme.Scheme.onBackground}
						/>
					</RoundedFrame>
				</frame>
				<frame BackgroundTransparency={1}>
					<Shadow Elevation={5} />
					<RoundedFrame
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromScale(1, 1)}
						Color={theme.Scheme.background}
						CornerRadius={16}
					>
						<textlabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.5, 0.5)}
							BackgroundTransparency={1}
							Text='Elevation 5'
							Font={Enum.Font.GothamBold}
							TextSize={16}
							TextTransparency={0.5}
							TextColor3={theme.Scheme.onBackground}
						/>
					</RoundedFrame>
				</frame>
			</>
		);
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, {}, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(StoryComponent);

class ThemedStoryComponent extends Roact.Component {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}

export = function (frame: GuiObject) {
	const Tree = Roact.mount(<ThemedStoryComponent />, frame);

	return () => {
		Roact.unmount(Tree);
	};
};
