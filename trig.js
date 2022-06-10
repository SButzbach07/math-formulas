import * as Func from "./func";
/* Pythagorean Theorem */
export function pt_AB(c, ab) {
    return Math.sqrt(Math.pow(c, 2) - Math.pow(ab, 2));
}
export function pt_C(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
/* Right Triangle */
export function sin_O(radians, hyp) {
    return hyp * Math.sin(radians);
}
export function sin_H(radians, opp) {
    return opp / Math.sin(radians);
}
export function cos_A(radians, hyp) {
    return hyp * Math.cos(radians);
}
export function cos_H(radians, adj) {
    return adj / Math.cos(radians);
}
export function tan_O(radians, adj) {
    return adj * Math.tan(radians);
}
export function tan_A(radians, opp) {
    return opp / Math.tan(radians);
}
export function csc_H(radians, opp) {
    return opp * Func.csc(radians);
}
export function csc_O(radians, hyp) {
    return hyp / Func.csc(radians);
}
export function sec_H(radians, adj) {
    return adj * Func.sec(radians);
}
export function sec_A(radians, hyp) {
    return hyp / Func.sec(radians);
}
export function cot_A(radians, opp) {
    return opp * Func.cot(radians);
}
export function cot_O(radians, adj) {
    return adj / Func.cot(radians);
}
/* Inverse Right Triangle */
export function nSin(opp, hyp) {
    return Math.asin(opp / hyp);
}
export function nCos(adj, hyp) {
    return Math.acos(adj / hyp);
}
export function nTan(opp, adj) {
    return Math.atan(opp / adj);
}
export function nCsc(hyp, opp) {
    return Func.acsc(1 / (hyp / opp));
}
export function nSec(hyp, adj) {
    return Func.asec(1 / (hyp / adj));
}
export function nCot(adj, opp) {
    return Func.acot(1 / (adj / opp));
}
/* Law of Sine/Cosine */
export function lSin_S(radians1, side1, radians2) {
    return (side1 * Math.sin(radians2)) / Math.sin(radians1);
} /* For given AAS and ASA measurements */
export function lSin_A(radians1, side1, side2) {
    return Math.asin((side2 * Math.sin(radians1)) / side1);
} /* For given SSA measurements */
export function lCos_A(side1, side2, side3) {
    return Math.acos(((Math.pow(side1, 2) + Math.pow(side2, 2)) - Math.pow(side3, 2)) / (2 * (side1 * side2)));
} /* For given SSS measurements */
export function lCos_S(side1, side2, radians) {
    return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2) - (2 * (side1 * side2) * Math.cos(radians)));
} /* For given SAS measurements */
