# Roblox Material UI

A library of Roact UI components that roughly follow the [Material Design 3 Guidlines](https://m3.material.io/). It also includes [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) like Scheme, Palettes, HCT, and Blend.

**This is still in alpha, and not all components are included yet so I wouldn't recommend using it in production games.** Though feel free to contribute if you want.

## Currently Indcluded Components

-   UIBase (unofficial)
-   Topbar (similar to a [center aligned Top App Bar](https://m3.material.io/components/top-app-bar/specs#51ac0fae-61c2-4abc-b8f9-1167bf54e875))
-   [Switch](https://m3.material.io/components/switch/overview) & SwitchTile
-   [Slider](https://m3.material.io/components/sliders/overview) & SliderTile
-   SectionTitle (unofficial)
-   RoundedFrame (similar to [Cards](https://m3.material.io/components/cards/overview))
-   ProgressBar (unofficial)
-   [IconButton](https://m3.material.io/components/icon-buttons/overview) (standard only)
-   Icon
-   ColorTile (unofficial)
-   Shadow
-   All [Common Buttons](https://m3.material.io/components/buttons/overview) except for ElevatedButton

## Examples

```typescript
import { FilledButton, Scheme, Theme, ThemeState } from '@rbxts/material-ui';
import Roact from '@rbxts/roact';
import { Players } from '@rbxts/services';

const themeColor = Color3.fromRGB(255, 0, 0);
const theme: ThemeState = {
	Color: themeColor,
	Theme: Theme.Dark,
	Scheme: Scheme.dark(themeColor).Colors,
};

const component = (
	<screengui>
		<FilledButton
			Theme={theme}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Text='This is a button!'
			AutomaticSize
			Pressed={() => {
				print('pressed!');
			}}
		/>
	</screengui>
);

const player = Players.LocalPlayer;
Roact.mount(component, player.WaitForChild('PlayerGui'));
```

![Settings Menu](https://i.imgur.com/CiHkQgm.png)
![Phone](https://i.imgur.com/T2kNXae.png)
