interface ShadowElevation {
	Id: string;
	Size: UDim2;
	Position: UDim2;
	SliceCenter: Rect;
}

interface ShadowElevations {
	1: ShadowElevation;
	2: ShadowElevation;
	3: ShadowElevation;
	4: ShadowElevation;
	5: ShadowElevation;
}

const Elevations: ShadowElevations = {
	1: {
		Id: 'rbxassetid://8483729324',
		Size: new UDim2(1, 8, 1, 8),
		Position: new UDim2(0.5, 0, 0.5, 1),
		SliceCenter: new Rect(new Vector2(25, 25), new Vector2(83, 83)),
	},
	2: {
		Id: 'rbxassetid://8483839654',
		Size: new UDim2(1, 16, 1, 16),
		Position: new UDim2(0.5, 0, 0.5, 2),
		SliceCenter: new Rect(new Vector2(30, 30), new Vector2(86, 86)),
	},
	3: {
		Id: 'rbxassetid://8483853097',
		Size: new UDim2(1, 22, 1, 22),
		Position: new UDim2(0.5, 0, 0.5, 4),
		SliceCenter: new Rect(new Vector2(35, 30), new Vector2(87, 82)),
	},
	4: {
		Id: 'rbxassetid://8483875626',
		Size: new UDim2(1, 28, 1, 28),
		Position: new UDim2(0.5, 0, 0.5, 5),
		SliceCenter: new Rect(new Vector2(40, 35), new Vector2(88, 83)),
	},
	5: {
		Id: 'rbxassetid://8483895366',
		Size: new UDim2(1, 36, 1, 36),
		Position: new UDim2(0.5, 0, 0.5, 6),
		SliceCenter: new Rect(new Vector2(45, 40), new Vector2(91, 86)),
	},
};

export default Elevations;
