import { useLoader } from '@react-three/fiber';
import React, { useMemo } from 'react';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

export const SvgAsync = React.memo(({ url }: { url: string }) => {
  const { paths } = useLoader(SVGLoader, url);
  const shapes = useMemo(
    () =>
      paths.flatMap((path: any, index: number) =>
        path
          .toShapes(true)
          .map((shape: any) => ({ index, shape, color: path.color }))
      ),
    [paths]
  );
  return (
    <group
      children={shapes.map((props, key) => (
        <SvgShape key={key} {...props} />
      ))}
      rotation={[-Math.PI / 2, 0, Math.PI]}
      scale={[-0.01, 0.01, 0.01]}
    />
  );
});

const SvgShape = ({
  shape,
  color,
  index,
}: {
  shape: any;
  color: any;
  index: any;
}) => (
  <mesh>
    <meshLambertMaterial
      attach="material"
      color={color}
      /*
          HACK: Offset SVG polygons by index
          The paths from SVGLoader Z-fight.
          This fix causes stacking problems with detailed SVGs.
        */
      polygonOffset
      polygonOffsetFactor={index * -0.1}
    />
    <shapeBufferGeometry attach="geometry" args={[shape]} />
  </mesh>
);
