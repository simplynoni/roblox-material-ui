import Roact from '@rbxts/roact';
import ThemeContext from './Theme/ThemeContext';

interface SectionTitleProps {
	Text: string;
}

export default class SectionTitle extends Roact.PureComponent<SectionTitleProps> {
	render() {
		return (
			<ThemeContext.Consumer
				render={(theme) => {
					return (
						<textlabel
							Size={new UDim2(1, 0, 0, 28)}
							BackgroundTransparency={1}
							Text={this.props.Text}
							Font={Enum.Font.GothamMedium}
							TextColor3={theme.Colors.primary}
							TextXAlignment={Enum.TextXAlignment.Left}
							TextYAlignment={Enum.TextYAlignment.Bottom}
							TextScaled
						>
							<uipadding PaddingLeft={new UDim(0, 16)} PaddingRight={new UDim(0, 16)} />
							<uitextsizeconstraint MaxTextSize={16} />
						</textlabel>
					);
				}}
			/>
		);
	}
}
