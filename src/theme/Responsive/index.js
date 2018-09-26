const Responsive = {
  /**
   * @param {Array} arrayListen Array of conditions need to detect
   * @param {Number} minWidth The min width
   * @param {Number} maxWidth The max width
   * @param {Function} inCase The callback will be called when currentWidth is high than minWidth and currentWidth low than maxWidth
   * @param {Function} outCase The callback will be called when not fit with those conditions below
   * Check current width with conditions
   * Call inCase() when condition of minWidth anx maxWidth are correct
   * Otherwise call outCase()
   */
  startResponsive: arrayListen => {
    const currentWidth = is.ios() ? window.innerWidth : window.screen.width
    arrayListen.forEach(condition => {
      const { minWidth = 0, maxWidth = window.outerWidth, inCase, outCase } = condition
      if (currentWidth > minWidth && currentWidth <= maxWidth) {
        if (inCase) inCase()
      } else {
        if (outCase) outCase()
      }
    })
  },
  /**
   * Callback when view change size
   * @param {Array} arrayListen Array of conditions need to detect
   * @param {Number} minWidth The min width
   * @param {Number} maxWidth The max width
   * @param {Function} inCase The callback will be called when currentWidth is high than minWidth and currentWidth low than maxWidth
   * @param {Function} outCase The callback will be called when not fit with those conditions below
   */
  listen: arrayListen => {
    /**
     * Listening to window resize change event
     * Trigger the function `startResponsive` when size of window was changed
     */
    window.onresize = () => {
      Responsive.startResponsive(arrayListen)
    }
    return {
      /**
       * Trigger event `onresize` for the first time
       */
      start: () => {
        Responsive.startResponsive(arrayListen)
      },
    }
  },
}

export default Responsive
