import React, { FC, useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionTypes } from '../../context/actionTypes';
import { AppContext } from '../../context/AppContext';
import { styles } from '../../Styles';


const Screen1: FC<{}> = ({ }) => {

  const { rootState, globalDispatch } = useContext(AppContext);
  const { count } = rootState.counterState;

  return (
    <SafeAreaView>
      <View
        style={styles.cotainer}
      >
        <Text
          style={styles.text}
        >Screen1
        </Text>
        <View>
          <Text
            style={styles.text}
          >
            Count: {count}
          </Text>

          <Button
            onPress={() => globalDispatch({ type: ActionTypes.Add })}
            title="Add"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Screen1;