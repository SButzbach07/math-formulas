# @sbutzbach07/math-formulas

A free package of geometric and trigonometric formulas if you need help with any math equation.

GitHub Repository: <https://github.com/SButzbach07/math-formulas>
npm Package: <https://www.npmjs.com/package/@sbutzbach07/math-formulas>

## How to install & use

`npm install @sbutzbach07/math-formulas`

One installed, in your JavaScript/TypeScript file, do the following:

```js
import * as Func from "@sbutzbach07/math-formulas/func";
import * as Geo from "@sbutzbach07/math-formulas/geo";
import * as Trig from "@sbutzbach07/math-formulas/trig";
```

This will import each section of the package.

## Extra Math functions (Func)

Since the Math class does not include the inverse of `sin`, `cos`, and `tan` that return side lengths, I have provided those for accessibility.

|Function|Equivalent|
|:-:|:-:|
|`acot(x)`|`Math.atan(1/x)`|
|`acsc(x)`|`Math.asin(1/x)`|
|`asec(x)`|`Math.acos(1/x)`|
|`cot(x)`|`1/Math.tan(x)`|
|`csc(x)`|`1/Math.sin(x)`|
|`sec(x)`|`1/Math.cos(x)`|

## Formulas (Geo & Trig)

|Function|Type|Concept|Output|
|:-:|:-:|:-:|-|
|`a_Cir(radius)`|Geometric|Area|The area of a circle|
|`a_HexA(apothem, perimeter)`|Geometric|Area|The area of a hexagon|
|`a_HexS(side)`|Geometric|Area|The area of a hexagon|
|`a_Rec(length, width)`|Geometric|Area|The area of a rectangle|
|`a_Rho(base, height)`|Geometric|Area|The area of a rhombus|
|`a_Squ(side)`|Geometric|Area|The area of a square|
|`a_Tra(base1, base2, height)`|Geometric|Area|The area of a trapezoid|
|`a_Tri(base, height)`|Geometric|Area|The area of a triangle|
|`c_CirD(diameter)`|Geometric|Circumference|The circumference of a circle|
|`c_CirR(radius)`|Geometric|Circumference|The circumference of a circle|
|`cos_A(radians, hyp)`|Trigonometric|Right Triangle|The adjacent side of &theta; of a right triangle|
|`cos_H(radians, adj)`|Trigonometric|Right Triangle|The hypotenuse of a right triangle|
|`cot_A(radians, opp)`|Trigonometric|Right Triangle|The adjacent side of &theta; of a right triangle|
|`cot_O(radians, adj)`|Trigonometric|Right Triangle|The opposite side of &theta; of a right triangle|
|`csc_H(radians, opp)`|Trigonometric|Right Triangle|The hypotenuse of a right triangle|
|`csc_O(radians, hyp)`|Trigonometric|Right Triangle|The opposite side of &theta; of a right triangle|
|`la_Con(radius, length)`|Geometric|Lateral Area|The lateral area of a cone|
|`la_Cyl(radius, height)`|Geometric|Lateral Area|The lateral area of a cylinder|
|`la_Pyr(length, perimeter)`|Geometric|Lateral Area|The lateral area of a pyramid|
|`la_Tri(height, perimeter)`|Geometric|Lateral Area|The lateral area of a triangular prism|
|`lCos_A(side1, side2, side3)`|Trigonometric|Law of Sine\Cosine|&angle;C mesaurement|
|`lCos_S(side1, side2, radians)`|Trigonometric|Law of Sine\Cosine|Side C measurement|
|`lSin_A(radians1, side1, side2)`|Trigonometric|Law of Sine\Cosine|&angle;2 measurement|
|`lSin_S(radians1, side1, radians2)`|Trigonometric|Law of Sine\Cosine|Side 2 measurement|
|`nCos(adj, hyp)`|Trigonometric|Inverse Right Triangle|The angle of &theta;|
|`nCot(adj, opp)`|Trigonometric|Inverse Right Triangle|The angle of &theta;|
|`nCsc(hyp, opp)`|Trigonometric|Inverse Right Triangle|The angle of &theta;|
|`nSec(hyp, adj)`|Trigonometric|Inverse Right Triangle|The angle of &theta;|
|`nSin(opp, hyp)`|Trigonometric|Inverse Right Triangle|The angle of &theta;|
|`nTan(opp, adj)`|Trigonometric|Inverse Right Triangle|The angle of &theta;|
|`p_Rec(length, width)`|Geometric|Perimeter|The perimeter of a rectangle|
|`p_Squ(side)`|Geometric|Perimeter|The perimeter of a square|
|`pt_AB(c, ab)`|Trigonometric|Pythagorean Theorem|Side A or B|
|`pt_C(a, b)`|Trogonometric|Pythagorean Theorem|Side C|
|`sa_Con(radius, length)`|Geometric|Surface Area|The surface area of a cone|
|`sa_Cyl(radius, height)`|Geometric|Surface Area|The surface area of a cylinder|
|`sa_Pyr(baseArea, length, perimeter)`|Geometric|Surface Area|The surface area of a pyramid|
|`sa_Rec(length, width, height)`|Geometric|Surface Area|The surface area of a rectangular prism|
|`sa_Sph(radius)`|Geometric|Surface Area|The surface area of a sphere|
|`sa_Tri(baseArea, height, perimeter)`|Geometric|Surface Area|The surface area of a triangular prism|
|`sec_A(radians, hyp)`|Trigonometric|Right Triangle|The adjacent side of &theta; of a right triangle|
|`sec_H(radians, adj)`|Trigonometric|Right Triangle|The hypotenuse of a right triangle|
|`sin_H(radians, opp)`|Trigonometric|Right Triangle|The hypotenuse of a right triangle|
|`sin_O(radians, hyp)`|Trigonometric|Right Triangle|The opposite side of &theta; of a right triangle|
|`tan_A(radians, opp)`|Trigonometric|Right Triangle|The adjacent side of &theta; of a right triangle|
|`tan_O(radians, adj)`|Trigonometric|Right Triangle|The opposide side of &theta; of a right triangle|
|`v_Con(radius, height)`|Geometric|Volume|The volume of a cone|
|`v_Cyl(radius, height)`|Geometric|Volume|The volume of a cylinder|
|`v_Pyr(baseArea, height)`|Geometric|Volume|The volume of a pyramid|
|`v_Rec(length, width, height)`|Geometric|Volume|The volume of a rectangular prism|
|`v_Sph(radius)`|Geometric|Volume|The volume of a sphere|
|`v_Tri(baseArea, height)`|Geometric|Volume|The volume of a triangular prism|
