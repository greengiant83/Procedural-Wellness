float metalnessFactor = vGroupInside;

float outsideMetalness = 1.0;
float outsideRoughness = 0.4; 

float insideMetalness = 0.0;
float insideRougness = fit01(vMorph, 0.7, 0.4);

roughnessFactor = fit01(vGroupInside, outsideRoughness, insideRougness); 
metalnessFactor = fit01(vGroupInside, outsideMetalness, insideMetalness);