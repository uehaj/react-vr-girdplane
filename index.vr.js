import React from 'react';
import { AppRegistry, asset, Pano, Text, View, Scene } from 'react-vr';
import { GridPlanes } from './src/components/GridPlanes';

export default class react_vr_meshplane extends React.Component {
  render() {
    return (
      <View>
        <Scene
          style={{
            transform: [
              { translate: [15, 15, 15] },
              { rotateY: 45 },
              { rotateX: -30 },
            ],
          }}
        />
        <GridPlanes />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactVrGridPlane', () => react_vr_meshplane);
