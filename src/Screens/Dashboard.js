import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import BottomNav from '../Componets/BottomNav';

export default function Dashboard() {
  return (
    <View style={{ flex: 1,flexDirection: 'row' }}>
      <View style = {{flexDirection : 'row'}}>
        <Text>
          Welcome Mr. Bhanu Singh
        </Text>
        <Image
        style={{width: 50, height: 50}}
          source={require('../Assets/Images/star.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <BottomNav>

        </BottomNav>

      </View>
    </View >
  );
}
