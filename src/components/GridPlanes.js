import React from 'react';
import PropTypes from 'prop-types';
import { View, Plane, Text } from 'react-vr';

export const GridLine = props => {
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

const AxisText = props => {
  const { translate, style } = props;
  return (
    <Text
      style={{
        transform: [{ translate }],
        ...style,
      }}>
      {props.children}
    </Text>
  );
};

const GridPlane = props => {
  const { mainSize, subSize, rotate, style } = props;
  return (
    <View style={{ transform: [...rotate] }}>
      {/* grid */}
      {[...Array(subSize * 2).keys()].map(y => (
        <GridLine y={y - subSize + 1} size={mainSize} key={y} style={style} />
      ))}
    </View>
  );
};

const Axis = props => {
  const { size, label, translate, style } = props;
  return (
    <View>
      {/* digits on axis */}
      {[...Array(size * 2 + 1).keys()].map(n => (
        <View key={n}>
          <AxisText translate={translate(n)} style={style}>
            {n - size}
          </AxisText>
        </View>
      ))}
      {/* axis label */}
      {label && (
        <AxisText translate={translate(size * 2 + 1.5)} style={style}>
          {label}
        </AxisText>
      )}
    </View>
  );
};

export const GridPlanes = props => {
  const { xSize, ySize, zSize, style = {} } = props;
  const labelStyle = { ...styles.labels, ...style.labels };
  return (
    <View>
      {xSize &&
        ySize && (
          <GridPlane
            mainSize={xSize}
            subSize={ySize}
            rotate={[]}
            style={{ ...styles.planeXY, ...style.planeXY }}
          />
        )}
      {ySize &&
        zSize && (
          <GridPlane
            mainSize={zSize}
            subSize={ySize}
            rotate={[{ rotateY: 90 }]}
            style={{ ...styles.planeYZ, ...style.planeYZ }}
          />
        )}
      {zSize &&
        xSize && (
          <GridPlane
            mainSize={xSize}
            subSize={zSize}
            rotate={[{ rotateX: 90 }]}
            style={{ ...styles.planeZX, ...style.planeZX }}
          />
        )}
      {xSize && (
        <Axis
          label={'X-Axis'}
          size={xSize}
          translate={n => [n - labelStyle.fontSize / 2 - xSize, 0.5, 0]}
          style={labelStyle}
        />
      )}
      {ySize && (
        <Axis
          label={'Y-Axis'}
          size={ySize}
          translate={n => [0, n + labelStyle.fontSize / 1.5 - ySize, 0]}
          style={labelStyle}
        />
      )}
      {zSize && (
        <Axis
          label={'Z-Axis'}
          size={zSize}
          translate={n => [0, 0, n - 0.2 - zSize]}
          style={labelStyle}
        />
      )}
    </View>
  );
};

GridPlanes.propTypes = {
  xSize: PropTypes.number,
  ySize: PropTypes.number,
  zSize: PropTypes.number,
  style: PropTypes.shape({
    labels: PropTypes.object,
    planeXY: PropTypes.object,
    planeYZ: PropTypes.object,
    planeZX: PropTypes.object,
  }),
};

const styles = {
  labels: {
    color: 'white',
    fontSize: 0.5,
    position: 'absolute',
  },
  planeXY: {
    color: 'red',
  },
  planeYZ: {
    color: 'green',
  },
  planeZX: {
    color: 'blue',
  },
};

export default GridPlanes;
