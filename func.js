/* Extra functions to the Math class */
export function acot(radians) {
    return Math.atan(1 / radians);
}
export function acsc(radians) {
    return Math.asin(1 / radians);
}
export function asec(radians) {
    return Math.acos(1 / radians);
}
export function cot(radians) {
    return 1 / Math.tan(radians);
}
export function csc(radians) {
    return 1 / Math.sin(radians);
}
export function sec(radians) {
    return 1 / Math.cos(radians);
}
