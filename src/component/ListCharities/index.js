import React, { PureComponent } from 'react'
import { partition } from 'lodash'
import styled, { withTheme } from 'styled-components'
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
   * @return {Array<Card>} Array of card components
   */
  renderItems = items => {
    return items.map((item, index) => {
      return <Card key={index} data={item} />
    })
  }

  /**
   * Render row for each columns
   * @return {Row} The row that wrap card components
   */
  renderRow = () => {
    const { chunk } = this.state
    const listCharities = chunk.map((item, index) => {
      return <Row key={index}>{this.renderItems(item)}</Row>
    })
    return listCharities
  }

  render() {
    return this.renderRow()
  }
}

export default ListCharities
