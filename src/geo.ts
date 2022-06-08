/* Perimeter */
export function p_Rec(length: number, width: number): number {
	return (length*2)+(width*2);
}

export function p_Squ(side: number): number {
	return side*4;
}

/* Circumference */
export function c_CirD(diameter: number): number {
	return diameter*Math.PI;
}

export function c_CirR(radius: number): number {
	return (radius*Math.PI)*2;
}

/* Area */
export function a_Cir(radius: number): number {
	return Math.pow(radius,2)*Math.PI;
}

export function a_HexA(apothem: number, perimeter: number) {
	return (apothem*perimeter)/2;
}

export function a_HexS(side: number): number {
	return Math.pow(side,2)*((3*Math.sqrt(3))/2);
}

export function a_Rec(length: number, width: number): number {
	return length*width;
}

export function a_Rho(base: number, height: number): number {
	return base*height;
}

export function a_Squ(side: number): number {
	return Math.pow(side,2);
}

export function a_Tra(base1: number, base2: number, height: number): number {
	return (base1+base2)*(height/2);
}

export function a_Tri(base: number, height: number): number {
	return (base*height)/2;
}

/* Lateral Area */
export function la_Con(radius: number, length: number): number {
	return (length*radius)*Math.PI;
}

export function la_Cyl(radius: number, height: number): number {
	return (height*radius)*(Math.PI*2);
}

export function la_Pyr(length: number, perimeter: number): number {
	return (length*perimeter)/2;
}

export function la_Tri(height: number, perimeter: number): number {
	return height*perimeter;
}

/* Surface Area */
export function sa_Con(radius: number, length: number): number {
	return (Math.pow(radius,2)*Math.PI)+((length*radius)*Math.PI);
}

export function sa_Cyl(radius: number, height: number): number {
	return (Math.pow(radius,2)*(Math.PI*2))+((height*radius)*(Math.PI*2));
}

export function sa_Pyr(baseArea: number, length: number, perimeter: number): number {
	return ((length*perimeter)/2)+baseArea;
}

export function sa_Rec(length: number, width: number, height: number): number {
	return (((length*width)*2)+((height*length)*2))+((height*width)*2);
}

export function sa_Sph(radius: number): number {
	return (Math.pow(radius,2))*(Math.PI*4);
}

export function sa_Tri(baseArea: number, height: number, perimeter: number): number {
	return (height*perimeter)+(baseArea*2);
}

/* Volume */
export function v_Con(radius: number, height: number): number {
	return ((Math.pow(radius,2)*height)*Math.PI)/3;
}

export function v_Cyl(radius: number, height: number): number {
	return (Math.pow(radius,2)*height)*Math.PI;
}

export function v_Pyr(baseArea: number, height: number): number {
	return (baseArea*height)/3;
}

export function v_Rec(length: number, width: number, height: number): number {
	return (height*length)*width;
}

export function v_Sph(radius: number): number {
	return ((Math.pow(radius,3)*Math.PI)*4)/3;
}

export function v_Tri(baseArea: number, height: number): number {
	return baseArea*height;
}
