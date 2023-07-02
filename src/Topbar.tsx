import Roact from '@rbxts/roact';
import { GothamBold } from './Fonts';
import IconButton from './IconButton';
import Icons from './Icons';
import { IconData, ThemeProps } from './types';

interface TopbarProps extends ThemeProps {
	Title: string;
	RichText?: boolean;
	TextAlignment?: Enum.TextXAlignment;
	Height?: UDim;
	CloseFunction?: () => void;
	LeadingIcon?: {
		Icon: IconData;
		Function: () => void;
	};
}

export default class Topbar extends Roact.PureComponent<TopbarProps> {
	render() {
		const theme = this.props.Theme;

		const closeButton = this.props.CloseFunction ? (
			<IconButton
				Theme={theme}
				Size={UDim2.fromScale(0, 1)}
				LayoutOrder={100}
				Icon={Icons.close}
				Pressed={this.props.CloseFunction}
			/>
		) : undefined;

		const leadingButton = this.props.LeadingIcon ? (
			<IconButton
				Theme={theme}
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
					<uipadding PaddingLeft={new UDim(0, 12)} PaddingRight={new UDim(0, 12)} />
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
						TextColor3={theme.Scheme.onBackground}
						TextXAlignment={this.props.TextAlignment}
						RichText={this.props.RichText}
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
					BackgroundColor3={theme.Scheme.outline}
				/>
			</frame>
		);
	}
}
