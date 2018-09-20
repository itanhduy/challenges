import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import Card from '../Card'

class ListCharities extends PureComponent {
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
    return this.renderView()
  }
}

export default ListCharities
