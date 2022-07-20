import Roact from '@rbxts/roact';

interface RoundedFrameProps extends Partial<JSX.IntrinsicElement<Frame>> {
	Size: Roact.Binding<UDim2> | UDim2;
	Position?: Roact.Binding<UDim2> | UDim2;
	AnchorPoint?: Roact.Binding<Vector2> | Vector2;
	CornerRadius: number | 'Full';
	Color: Color3;
	Transparency?: Roact.Binding<number> | number;
	Outline?: boolean;
	OutlineColor?: Color3;
}

export default Roact.forwardRef<RoundedFrameProps, Frame>((props, ref) => (
	<frame
		Size={props.Size}
		Position={props.Position}
		AnchorPoint={props.AnchorPoint}
		BackgroundColor3={props.Color}
		BackgroundTransparency={props.Transparency}
		ZIndex={props.ZIndex}
		BorderSizePixel={0}
		LayoutOrder={props.LayoutOrder}
		Ref={ref}
	>
		<uicorner
			Key='Corner'
			CornerRadius={props.CornerRadius === 'Full' ? new UDim(0.5, 0) : new UDim(0, props.CornerRadius)}
		/>
		{props.Outline ? <uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Color={props.OutlineColor} /> : <></>}
		{props[Roact.Children]}
	</frame>
));
