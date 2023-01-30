uniform float fillAmount;

varying float vGroupInside;
varying float vMorph;

float fit01(float value, float out_min, float out_max){
  float v, low, high;
  v = value * (out_max - out_min) + out_min, out_min, out_max;
  if(out_min > out_max)
  {
    low = out_max;
    high = out_min;
  }
  else
  {
    low = out_min;
    high = out_max;
  }
  v = clamp(v, low, high);
  return v;
}