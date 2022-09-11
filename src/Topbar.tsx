import Roact from '@rbxts/roact';
import { GothamBold } from './Fonts';

import IconButton from './IconButton';
import { Icons } from './Icons';
import ThemeContext from './Theme/ThemeContext';

interface TopbarProps {
	Title: string;
	Height?: UDim;
	CloseFunction?: () => void;
	LeadingIcon?: {
		Icon: Icons | string;
		Function: () => void;
	};
}

export default class Topbar extends Roact.PureComponent<TopbarProps> {
	render() {
		return (
			<ThemeContext.Consumer
				render={(theme) => {
					const closeButton = this.props.CloseFunction ? (
						<IconButton
							Size={UDim2.fromScale(0, 1)}
							LayoutOrder={100}
							Icon={Icons.Close}
							Pressed={this.props.CloseFunction}
						/>
					) : undefined;

					const leadingButton = this.props.LeadingIcon ? (
						<IconButton
							Size={UDim2.fromScale(0, 1)}
							LayoutOrder={0}
							Icon={this.props.LeadingIcon.Icon}
							Pressed={this.props.LeadingIcon.Function}
						/>
					) : undefined;

					return (
						<frame
							Key='Topbar'
							AnchorPoint={new Vector2(0.5, 0)}
							Position={UDim2.fromScale(0.5, 0)}
							Size={new UDim2(new UDim(1), this.props.Height || new UDim(0.15))}
							BackgroundTransparency={1}
						>
							<frame
								Key='Content'
								AnchorPoint={new Vector2(0.5, 0.5)}
								Position={UDim2.fromScale(0.5, 0.5)}
								Size={UDim2.fromScale(1, 1)}
								BackgroundTransparency={1}
							>
								<uipadding PaddingLeft={new UDim(0, 16)} PaddingRight={new UDim(0, 16)} />
								<frame
									Key='Leading'
									AnchorPoint={new Vector2(0, 0.5)}
									Position={UDim2.fromScale(0, 0.5)}
									Size={UDim2.fromScale(0.35, 0.7)}
									BackgroundTransparency={1}
								>
									<uilistlayout
										Padding={new UDim(0, 16)}
										FillDirection={Enum.FillDirection.Horizontal}
										VerticalAlignment={Enum.VerticalAlignment.Center}
										HorizontalAlignment={Enum.HorizontalAlignment.Left}
										SortOrder={Enum.SortOrder.LayoutOrder}
									/>
									{leadingButton}
								</frame>
								<textlabel
									Key='Title'
									AnchorPoint={new Vector2(0.5, 0.5)}
									Position={UDim2.fromScale(0.5, 0.5)}
									Size={UDim2.fromScale(1, 0.5)}
									BackgroundTransparency={1}
									FontFace={GothamBold}
									Text={this.props.Title}
									TextColor3={theme.Colors.onBackground}
									TextScaled
								>
									<uitextsizeconstraint MaxTextSize={22} />
								</textlabel>
								<frame
									Key='Trailing'
									AnchorPoint={new Vector2(1, 0.5)}
									Position={UDim2.fromScale(1, 0.5)}
									Size={UDim2.fromScale(0.35, 0.7)}
									BackgroundTransparency={1}
								>
									<uilistlayout
										Padding={new UDim(0, 8)}
										FillDirection={Enum.FillDirection.Horizontal}
										VerticalAlignment={Enum.VerticalAlignment.Center}
										HorizontalAlignment={Enum.HorizontalAlignment.Right}
										SortOrder={Enum.SortOrder.LayoutOrder}
									/>
									{closeButton}
									{this.props[Roact.Children]}
								</frame>
							</frame>
							<frame
								Key='Divider'
								AnchorPoint={new Vector2(0.5, 1)}
								Position={UDim2.fromScale(0.5, 1)}
								Size={new UDim2(1, 0, 0, 1)}
								BorderSizePixel={0}
								BackgroundColor3={theme.Colors.outline}
							/>
						</frame>
					);
				}}
			/>
		);
	}
}
