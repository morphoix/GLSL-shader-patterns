varying vec2 vUv;

void main()

{
    vec2 wavedUv = vec2(
        vUv.x + sin(vUv.y * 10.0) * 0.01,
        vUv.y + sin(vUv.x * 10.0) * 0.01
    );
    float strength = 1.0 - step(0.01, distance(wavedUv, vUv));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
