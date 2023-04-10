import Roact from '@rbxts/roact';
import { GothamMedium } from './Fonts';
import { ThemeProps } from './types';

interface SectionTitleProps extends ThemeProps {
	Text: string;
	Size?: UDim2;
	TextSize?: number;
	MaxTextSize?: number;
}

export default class SectionTitle extends Roact.PureComponent<SectionTitleProps> {
	render() {
		const theme = this.props.Theme;

		return (
			<textlabel
				Size={this.props.Size || new UDim2(1, 0, 0, 28)}
				BackgroundTransparency={1}
				Text={this.props.Text}
				FontFace={GothamMedium}
				TextColor3={theme.Scheme.primary}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextYAlignment={Enum.TextYAlignment.Bottom}
				TextSize={this.props.TextSize}
				TextScaled={!this.props.TextSize}
			>
				<uipadding PaddingLeft={new UDim(0, 16)} PaddingRight={new UDim(0, 16)} />
				{this.props.MaxTextSize ? <uitextsizeconstraint MaxTextSize={this.props.MaxTextSize} /> : undefined}
			</textlabel>
		);
	}
}
