void sideLengths(
  highp float hypotenuse, 
  highp float angleInDegrees, 
  out highp float opposite, 
  out highp float adjacent) {
    float rad = radians(angleInDegrees);
    adjacent = hypotenuse * cos(rad);
    opposite = hypotenuse * sin(rad);
}
//Do not change this line
#pragma glslify: export(sideLengths)