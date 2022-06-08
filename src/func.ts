/* Extra functions to the Math class */
export function acot(radians: number): number {
	return Math.atan(1/radians);
}

export function acsc(radians: number): number {
	return Math.asin(1/radians);
}

export function asec(radians: number): number {
	return Math.acos(1/radians);
}

export function cot(radians: number): number {
	return 1/Math.tan(radians);
}

export function csc(radians: number): number {
	return 1/Math.sin(radians);
}

export function sec(radians: number): number {
	return 1/Math.cos(radians);
}
