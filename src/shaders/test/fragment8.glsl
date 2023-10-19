varying vec2 vUv;

void main()

{
    float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));

    float barY = step(0.4, mod(vUv.y * 10.0, 1.0));
    barY *= step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));

    float strength = max(barX, barY);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
