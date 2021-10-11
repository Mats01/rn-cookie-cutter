import React, { FC } from 'react'
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../Styles';


const Screen1: FC<{}> = ({ }) => {

  return (
    <SafeAreaView>
      <View
        style={styles.cotainer}
      >
        <Text
          style={styles.text}
        >Screen1</Text>
      </View>
    </SafeAreaView>
  )
}
export default Screen1;