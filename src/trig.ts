import * as Func from "./func";

/* Pythagorean Theorem */
export function pt_AB(c: number, ab: number): number {
	return Math.sqrt(Math.pow(c,2)-Math.pow(ab,2));
}

export function pt_C(a: number, b: number): number {
	return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
}

/* Right Triangle */
export function sin_O(radians: number, hyp: number): number {
	return hyp*Math.sin(radians);
}

export function sin_H(radians: number, opp: number): number {
	return opp/Math.sin(radians);
}

export function cos_A(radians: number, hyp: number): number {
	return hyp*Math.cos(radians);
}

export function cos_H(radians: number, adj: number): number {
	return adj/Math.cos(radians);
}

export function tan_O(radians: number, adj: number): number {
	return adj*Math.tan(radians);
}

export function tan_A(radians: number, opp: number): number {
	return opp/Math.tan(radians);
}

export function csc_H(radians: number, opp: number): number {
	return opp*Func.csc(radians);
}

export function csc_O(radians: number, hyp: number): number {
	return hyp/Func.csc(radians);
}

export function sec_H(radians: number, adj: number): number {
	return adj*Func.sec(radians);
}

export function sec_A(radians: number, hyp: number): number {
	return hyp/Func.sec(radians);
}

export function cot_A(radians: number, opp: number): number {
	return opp*Func.cot(radians);
}

export function cot_O(radians: number, adj: number): number {
	return adj/Func.cot(radians);
}

/* Inverse Right Triangle */
export function nSin(opp: number, hyp: number): number {
	return Math.asin(opp/hyp);
}

export function nCos(adj: number, hyp: number): number {
	return Math.acos(adj/hyp);
}

export function nTan(opp: number, adj: number): number {
	return Math.atan(opp/adj);
}

export function nCsc(hyp: number, opp: number): number {
	return Func.acsc(1/(hyp/opp));
}

export function nSec(hyp: number, adj: number): number {
	return Func.asec(1/(hyp/adj));
}

export function nCot(adj: number, opp: number): number {
	return Func.acot(1/(adj/opp));
}

/* Law of Sine/Cosine */
export function lSin_S(radians1: number, side1: number, radians2: number): number {
	return (side1*Math.sin(radians2))/Math.sin(radians1);
} /* For given AAS and ASA measurements */

export function lSin_A(radians1: number, side1: number, side2: number): number {
	return Math.asin((side2*Math.sin(radians1))/side1);
} /* For given SSA measurements */

export function lCos_A(side1: number, side2: number, side3: number): number {
	return Math.acos(((Math.pow(side1,2)+Math.pow(side2,2))-Math.pow(side3,2))/(2*(side1*side2)));
} /* For given SSS measurements */

export function lCos_S(side1: number, side2: number, radians: number): number {
	return Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2)-(2*(side1*side2)*Math.cos(radians)));
} /* For given SAS measurements */
