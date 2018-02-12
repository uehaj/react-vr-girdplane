import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import MeshPlane from './src/components/MeshPlane';

export default class react_vr_meshplane extends React.Component {
  render() {
    return (
      <View style={{ transform: [{ translate: [0, 3, -10] }] }}>
        <MeshPlane w={10} />
      </View>
    );
  }
}

AppRegistry.registerComponent('react_vr_meshplane', () => react_vr_meshplane);
