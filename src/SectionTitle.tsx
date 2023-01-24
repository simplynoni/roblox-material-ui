import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import { GothamMedium } from './Fonts';
import { ThemeState, ThemeStore } from './Theme/ThemeState';
import { ThemeProps } from './types';

interface SectionTitleProps {
	Text: string;
	Size?: UDim2;
	TextSize?: number;
	MaxTextSize?: number;
}

class SectionTitleBase extends Roact.PureComponent<SectionTitleProps & ThemeProps> {
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

const Connected = connect<{ Theme: ThemeState }, {}, SectionTitleProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(SectionTitleBase);

export default class SectionTitle extends Roact.Component<SectionTitleProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
