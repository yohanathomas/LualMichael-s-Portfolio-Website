import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uPointer;

  // simplex-ish value noise
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);

    float t = uTime * 0.06;
    vec2 warp = vec2(fbm(p * 1.3 + t), fbm(p * 1.3 - t + 4.7));
    float flow = fbm(p * 1.6 + warp * 1.8 + uPointer * 0.35);
    flow = flow * 0.5 + 0.5;

    // premium editorial palette — cool chalk wash with green/navy hints
    vec3 deep   = vec3(0.90, 0.91, 0.93);
    vec3 board  = vec3(0.969, 0.969, 0.976);
    vec3 ember  = vec3(0.82, 0.88, 0.83);
    vec3 beam   = vec3(0.353, 0.565, 0.376);

    vec3 col = mix(board, deep, smoothstep(0.1, 0.75, flow));
    col = mix(col, ember, smoothstep(0.5, 0.92, flow) * 0.5);
    col = mix(col, beam, smoothstep(0.82, 1.0, flow) * 0.22);

    // soft vignette so content stays readable
    float d = length(p * vec2(0.9, 1.15));
    col *= 1.0 - smoothstep(0.4, 1.3, d) * 0.3;

    // subtle grain
    col += (fract(sin(dot(uv * uTime, vec2(12.99, 78.23))) * 43758.545) - 0.5) * 0.015;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Plane() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!mat.current) return;
    uniforms.uTime.value += delta;
    uniforms.uRes.value.set(state.size.width, state.size.height);
    uniforms.uPointer.value.lerp(
      new THREE.Vector2(state.pointer.x, state.pointer.y),
      0.03,
    );
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function ShaderGradient() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: "low-power" }}
      dpr={[1, 1.5]}
      className="!absolute inset-0"
      style={{ position: "absolute", inset: 0 }}
    >
      <Plane />
    </Canvas>
  );
}
