import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
  render() {
    return (
      <ListView
        renderRow={this.renderRow}
        dataSource={this.dataSource} />
    )
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow(library) {
    return <ListItem library={library} />
  }
}

const mapStateToProps = state => {
  const { libraries } = state
  return {libraries}
}

export default connect(mapStateToProps)(LibraryList)
