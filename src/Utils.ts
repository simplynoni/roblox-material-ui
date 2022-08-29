export function LowerCaseFirstLetter(input: string) {
	return input.split('')[0].lower() + input.sub(2);
}
