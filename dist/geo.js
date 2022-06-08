/* Perimeter */
export function p_Rec(length, width) {
    return (length * 2) + (width * 2);
}
export function p_Squ(side) {
    return side * 4;
}
/* Circumference */
export function c_CirD(diameter) {
    return diameter * Math.PI;
}
export function c_CirR(radius) {
    return (radius * Math.PI) * 2;
}
/* Area */
export function a_Cir(radius) {
    return Math.pow(radius, 2) * Math.PI;
}
export function a_HexA(apothem, perimeter) {
    return (apothem * perimeter) / 2;
}
export function a_HexS(side) {
    return Math.pow(side, 2) * ((3 * Math.sqrt(3)) / 2);
}
export function a_Rec(length, width) {
    return length * width;
}
export function a_Rho(base, height) {
    return base * height;
}
export function a_Squ(side) {
    return Math.pow(side, 2);
}
export function a_Tra(base1, base2, height) {
    return (base1 + base2) * (height / 2);
}
export function a_Tri(base, height) {
    return (base * height) / 2;
}
/* Lateral Area */
export function la_Con(radius, length) {
    return (length * radius) * Math.PI;
}
export function la_Cyl(radius, height) {
    return (height * radius) * (Math.PI * 2);
}
export function la_Pyr(length, perimeter) {
    return (length * perimeter) / 2;
}
export function la_Tri(height, perimeter) {
    return height * perimeter;
}
/* Surface Area */
export function sa_Con(radius, length) {
    return (Math.pow(radius, 2) * Math.PI) + ((length * radius) * Math.PI);
}
export function sa_Cyl(radius, height) {
    return (Math.pow(radius, 2) * (Math.PI * 2)) + ((height * radius) * (Math.PI * 2));
}
export function sa_Pyr(baseArea, length, perimeter) {
    return ((length * perimeter) / 2) + baseArea;
}
export function sa_Rec(length, width, height) {
    return (((length * width) * 2) + ((height * length) * 2)) + ((height * width) * 2);
}
export function sa_Sph(radius) {
    return (Math.pow(radius, 2)) * (Math.PI * 4);
}
export function sa_Tri(baseArea, height, perimeter) {
    return (height * perimeter) + (baseArea * 2);
}
/* Volume */
export function v_Con(radius, height) {
    return ((Math.pow(radius, 2) * height) * Math.PI) / 3;
}
export function v_Cyl(radius, height) {
    return (Math.pow(radius, 2) * height) * Math.PI;
}
export function v_Pyr(baseArea, height) {
    return (baseArea * height) / 3;
}
export function v_Rec(length, width, height) {
    return (height * length) * width;
}
export function v_Sph(radius) {
    return ((Math.pow(radius, 3) * Math.PI) * 4) / 3;
}
export function v_Tri(baseArea, height) {
    return baseArea * height;
}
