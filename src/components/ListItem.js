import React, { Component } from 'react'
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  render() {
    const { titleStyle } = styles
    const { id, title } = this.props.library
    const { selectLibrary, selectedId } = this.props
    console.log('listItem', this.props)
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderDescription() {
    const { library, expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptStyle}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
    return null
  }

  componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring()
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  return { expanded: state.selectedId === ownProps.library.id }
}

export default connect(mapStateToProps, actions)(ListItem)
