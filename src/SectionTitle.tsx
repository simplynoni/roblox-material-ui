import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import { GothamMedium } from './Fonts';
import { ThemeState, ThemeStore } from './Theme/ThemeState';
import { ThemeProps } from './types';

interface SectionTitleProps {
	Text: string;
}

class SectionTitle extends Roact.PureComponent<SectionTitleProps & ThemeProps> {
	render() {
		const theme = this.props.Theme;

		return (
			<textlabel
				Size={new UDim2(1, 0, 0, 28)}
				BackgroundTransparency={1}
				Text={this.props.Text}
				FontFace={GothamMedium}
				TextColor3={theme.Scheme.primary}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextYAlignment={Enum.TextYAlignment.Bottom}
				TextScaled
			>
				<uipadding PaddingLeft={new UDim(0, 16)} PaddingRight={new UDim(0, 16)} />
				<uitextsizeconstraint MaxTextSize={16} />
			</textlabel>
		);
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, SectionTitleProps, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(SectionTitle);

export default class ThemedSectionTitle extends Roact.Component<SectionTitleProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}
