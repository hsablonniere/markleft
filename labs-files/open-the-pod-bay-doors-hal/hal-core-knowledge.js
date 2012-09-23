var halKnowledgeUserName = 'Dave';

var halConvertLengthUnits = ['in', 'ft', 'yd', 'mi', 'cm', 'm', 'km'];
var halConvertLengthUnitsSingular = ['inch', 'foot', 'yard', 'mile', 'centimeter', 'meter', 'kilometer'];
var halConvertLengthUnitsPlural = ['inches', 'feet', 'yards', 'miles', 'centimeters', 'meters', 'kilometers'];

var halConvertLengthTable = [
  [        1,      1/12,      1/36,    1/63360,       2.54,   0.0254,   2.54e-5], // inch
  [       12,         1,       1/3,     1/5280,      30.48,   0.3048,  30.48e-5], // foot
  [       36,         3,         1,     1/1760,      91.44,   0.9144,  91.44e-5], // yard
  [    63360,      5280,      1760,          1,   160934.4, 1609.344,  1.609344], // mile
  [   1/2.54,   1/30.48,   1/91.44, 1/160934.4,          1,    1/100,      1e-5], // centimeter
  [ 100/2.54, 100/30.48, 100/91.44, 1/1609.344,        100,        1,    1/1000], // meter
  [ 1e5/2.54, 1e5/30.48, 1e5/91.44, 1/1.609344,        1e5,     1000,         1]  // kilometer
  //    inch,      foot,      yard,       mile, centimeter,    meter, kilometer
];
