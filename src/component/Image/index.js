import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ImageComponent = styled.img``

class Image extends PureComponent {
  render() {
    const { url } = this.props
    return <ImageComponent src={`images/${url}`} />
  }
}

export default Image
