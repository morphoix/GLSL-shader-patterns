varying vec2 vUv;

void main()

{
    float strength = floor(vUv.x * 10.0) / 10.0;
    strength *= floor(vUv.y * 10.0) / 10.0;
    vec3 blackColor = vec3(0.0);
    vec3 uvColor = vec3(vUv, 1.0);
    vec3 mixedColor = mix(blackColor, uvColor, strength);

    gl_FragColor = vec4(mixedColor, 1.0);
}
