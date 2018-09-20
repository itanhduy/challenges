import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ImageComponent = styled.div`
  ${props => {
    const { url, height, width } = props
    return {
      backgroundImage: `url(images/${url})`,
      backgroundSize: 'cover',
      height: `${height}px`,
      width: `${width}px`,
    }
  }};
`

class Image extends PureComponent {
  render() {
    return <ImageComponent {...this.props} />
  }
}

export default Image
