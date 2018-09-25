import React, { PureComponent } from 'react'
import Row from '../Row'
import Card from '../Card'

class ListCharities extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      chunk: [],
    }
  }

  /**
   * Create array items
   * Depends on columns
   * @return {Array<Array<Object>>} The array of array objects. For example with columns is 2.
   * We will have a list of array with 2 objects inside
   */
  createArrayItems = () => {
    const { data, columns } = this.props
    const chunk = []
    while (data.length > 0) {
      chunk.push(data.splice(0, columns))
    }
    this.setState({
      chunk,
    })
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      ...props,
    }
  }

  componentDidMount() {
    this.createArrayItems()
  }

  componentDidUpdate(prevProps) {
    if (!Object.is(prevProps.data, this.props.data)) {
      this.createArrayItems()
    }
  }

  /**
   * Renrderi items inside row
   * @param {Object} items The list items of charity information
   * @return {Array<Card>} Array of card components
   */
  renderItems = items => {
    const { rightComponent, descriptionComponent } = this.props
    return items.map((item, index) => {
      return (
        <Card key={index} data={item} rightComponent={rightComponent} descriptionComponent={descriptionComponent} />
      )
    })
  }

  /**
   * Render row for each columns
   * @return {Row} The row that wrap card components
   */
  renderRow = () => {
    const { chunk } = this.state
    const listCharities = chunk.map((item, index) => {
      return (
        <Row key={index} styleName="fullWidth md-gutter-top">
          {this.renderItems(item)}
        </Row>
      )
    })
    return listCharities
  }

  render() {
    return this.renderRow()
  }
}

export default ListCharities
