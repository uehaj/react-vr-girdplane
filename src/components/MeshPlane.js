import React from 'react';
import { View, Plane, Text } from 'react-vr';

const MeshLine = props => {
  const { w } = props;
  return (
    <View>
      {[...Array(w * 2).keys()].map(x => {
        return (
          <Plane
            key={x}
            wireframe={true}
            dimWidth={1}
            dimHeight={1}
            style={{
              transform: [{ translate: [w - 0.5 - x, w - 0.5 - props.y, 0] }],
            }}
          />
        );
      })}
    </View>
  );
};

const Txt = props => (
  <Text
    style={{
      transform: [{ translate: [props.x, props.y, 0] }],
      ...styles.digit,
    }}>
    {props.children}
  </Text>
);

const MeshPlane = props => {
  const { w } = props;
  return (
    <View>
      {[...Array(w * 2).keys()].map(y => <MeshLine y={y} w={w} key={y} />)}
      {[...Array(w * 2 + 1).keys()].map(n => (
        <View key={n}>
          <Txt x={n - w - 0.2} y={0.5}>
            {n - w}
          </Txt>
          <Txt x={0} y={n - w + 0.5}>
            {n - w}
          </Txt>
        </View>
      ))}
      <Txt x={w + 0.5} y={0.5}>
        x-axis
      </Txt>
      <Txt x={0} y={w + 1.5}>
        y-axis
      </Txt>
    </View>
  );
};

const styles = {
  digit: {
    fontSize: 0.5,
    position: 'absolute',
  },
};

export default MeshPlane;
