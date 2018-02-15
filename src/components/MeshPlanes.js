import React from 'react';
import PropTypes from 'prop-types';
import { View, Plane, Text } from 'react-vr';

export const MeshLine = props => {
  const { size, y, style } = props;

  return (
    <View>
      {[...Array(size * 2).keys()].map(x => (
        <Plane
          key={x}
          wireframe={true}
          dimWidth={1}
          dimHeight={1}
          style={{
            transform: [{ translate: [size - 0.5 - x, 0.5 - y, 0] }],
            ...style,
          }}
        />
      ))}
    </View>
  );
};

const Txt = props => {
  const { translate } = props;
  return (
    <Text
      style={{
        transform: [{ translate }],
        ...styles.digit,
      }}>
      {props.children}
    </Text>
  );
};

const MeshPlane = props => {
  const { mainSize, subSize, rotate, style } = props;
  return (
    <View style={{ transform: [...rotate] }}>
      {/* mesh grid */}
      {[...Array(subSize * 2).keys()].map(y => (
        <MeshLine y={y - subSize + 1} size={mainSize} key={y} style={style} />
      ))}
    </View>
  );
};

export const Axis = props => {
  const { size, label, translate } = props;
  return (
    <View>
      {/* digits on axis */}
      {[...Array(size * 2 + 1).keys()].map(n => (
        <View key={n}>
          <Txt translate={translate(n)}>{n - size}</Txt>
        </View>
      ))}
      {/* axis label */}
      {label && <Txt translate={translate(size * 2 + 1.5)}>{label}</Txt>}
    </View>
  );
};

export const MeshPlanes = props => {
  const { xSize, ySize, zSize } = props;
  return (
    <View>
      {xSize &&
        ySize && (
          <MeshPlane
            mainSize={xSize}
            subSize={ySize}
            rotate={[]}
            style={styles.styleXY}
          />
        )}
      {ySize &&
        zSize && (
          <MeshPlane
            mainSize={zSize}
            subSize={ySize}
            rotate={[{ rotateY: 90 }]}
            style={styles.styleYZ}
          />
        )}
      {zSize &&
        xSize && (
          <MeshPlane
            mainSize={xSize}
            subSize={zSize}
            rotate={[{ rotateX: 90 }]}
            style={styles.styleZX}
          />
        )}
      {xSize && (
        <Axis
          label={'X-Axis'}
          size={xSize}
          translate={n => [n - 0.2 - xSize, 0.5, 0]}
        />
      )}
      {ySize && (
        <Axis
          label={'Y-Axis'}
          size={ySize}
          translate={n => [0, n + 0.5 - ySize, 0]}
        />
      )}
      {zSize && (
        <Axis
          label={'Z-Axis'}
          size={zSize}
          translate={n => [0, 0, n - 0.2 - zSize]}
        />
      )}
    </View>
  );
};

const styles = {
  digit: {
    color: 'white',
    fontSize: 0.5,
    position: 'absolute',
  },
  styleXY: {
    color: 'red',
  },
  styleYZ: {
    color: 'green',
  },
  styleZX: {
    color: 'blue',
  },
};

export default MeshPlanes;
