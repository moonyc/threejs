
uniform vec2 uFrequency;
uniform float uTime;



varying vec2 vUv;
varying float vElevation;



void main()
{
   // the expression resturns a vec4
   //gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); 

   vec4 modelPosition = modelMatrix * vec4(position, 1.0);

   float elevation = sin(modelPosition.x * uFrequency.x -uTime) * 0.1;
   elevation += sin(modelPosition.y * uFrequency.y -uTime) * 0.1;

   modelPosition.z = elevation;
   
   
   
   vec4 viewPosition = viewMatrix * modelPosition;
   vec4 projectedPosition = projectionMatrix * viewPosition;

   gl_Position = projectedPosition;

   vUv = uv;
   vElevation = elevation;

  
}