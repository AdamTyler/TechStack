import React from 'react'
import { Text, View } from 'react-native'

const Header = ({ text }) => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}
const styles = {
  viewStyle: {
    backgroundColor: '#0d97e6',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.2
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
}
export { Header }
