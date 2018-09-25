const Responsive = {
  /**
   * Callback when view change size
   * @param {Number} minWidth The min width
   * @param {Number} maxWidth The max width
   * @param {Function} inCase The callback will be called when currentWidth is high than minWidth and currentWidth low than maxWidth
   * @param {Function} outCase The callback will be called when not fit with those conditions below
   */
  listen: (minWidth = 0, maxWidth = window.outerWidth, inCase, outCase) => {
    window.onresize = () => {
      const currentWidth = window.outerWidth
      if (currentWidth > minWidth && currentWidth <= maxWidth) {
        if (inCase) inCase()
      } else {
        if (outCase) outCase()
      }
    }
  },
}

export default Responsive
