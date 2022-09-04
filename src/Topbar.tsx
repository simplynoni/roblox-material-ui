import { useSelector } from '@rbxts/hook-bag';
import Roact from '@rbxts/roact';
import Hooks from '@rbxts/roact-hooks';
import { StoreProvider } from '@rbxts/roact-rodux';

import IconButton from './IconButton';
import { Icons } from './Icons';
import { ThemeState, ThemeStore } from './Theme/ThemeState';

interface TopbarProps {
	Title: string;
	Height?: UDim;
	CloseFunction?: () => void;
	LeadingIcon?: {
		Icon: Icons;
		Function: () => void;
	};
}

const TopbarBase: Hooks.FC<TopbarProps> = (props, hooks) => {
	const theme = useSelector((state: ThemeState) => state)(hooks);

	print(theme);

	const closeButton = props.CloseFunction ? (
		<IconButton Size={UDim2.fromScale(0, 1)} LayoutOrder={100} Icon={Icons.Close} Pressed={props.CloseFunction} />
	) : undefined;

	const leadingButton = props.LeadingIcon ? (
		<IconButton
			Size={UDim2.fromScale(0, 1)}
			LayoutOrder={0}
			Icon={props.LeadingIcon.Icon}
			Pressed={props.LeadingIcon.Function}
		/>
	) : undefined;

	return (
		<frame
			Key='Topbar'
			AnchorPoint={new Vector2(0.5, 0)}
			Position={UDim2.fromScale(0.5, 0)}
			Size={new UDim2(new UDim(1), props.Height || new UDim(0.15))}
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
					Font={Enum.Font.GothamBold}
					Text={props.Title}
					TextColor3={theme.Scheme.onBackground}
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
					{props[Roact.Children]}
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
};

const TopbarHooks = new Hooks(Roact)(TopbarBase);

export default class Topbar extends Roact.Component<TopbarProps> {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<TopbarHooks {...this.props} />
			</StoreProvider>
		);
	}
}
