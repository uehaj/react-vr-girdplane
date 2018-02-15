import React from 'react';
import { AppRegistry, asset, Pano, Text, View, Scene } from 'react-vr';
import { GridPlanes } from './src/components/GridPlanes';

export default class react_vr_meshplane extends React.Component {
  render() {
    return (
      <View>
        <Scene style={{ transform: [{ translate: [15, 15, 15] }] }} />
        <GridPlanes
          ySize={10}
          xSize={20}
          zSize={10}
          style={{
            labels: { color: 'cyan', fontSize: 0.7 },
            planeXY: { color: 'red' },
            planeYZ: { color: 'red' },
            planeZX: { color: 'red' },
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('react_vr_meshplane', () => react_vr_meshplane);
