import React, { PureComponent } from 'react'
import { partition } from 'lodash'
import styled, { withTheme } from 'styled-components'
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
   * Return list card component with information of charity inside
   * @return {Array<Card>} List card component
   */
  renderView = () => {
    const { data } = this.props
    const listCharities = data.map((item, index) => {
      return <Card key={index} data={item} />
    })
    return listCharities
  }

  render() {
    const { chunk } = this.state
    console.info(chunk)
    return this.renderView()
  }
}

export default ListCharities
