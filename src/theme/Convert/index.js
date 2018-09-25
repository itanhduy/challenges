const Convert = {
  /**
   * Make color with opacity
   * @param {String} hex The HEX color code
   * @param {Number} opacity The opacity that you want to make. Default is 0.25
   */
  colorOpacity: (hex, opacity = 0.25) => {
    /**
     * Remove # to get number
     */
    hex = hex.replace('#', '')

    /**
     * Extract RGB colors from HEX color
     */
    const R = parseInt(hex.substring(0, 2), 16)
    const G = parseInt(hex.substring(2, 4), 16)
    const B = parseInt(hex.substring(4, 6), 16)
    /**
     * Create RGBA colors
     */
    const result = `rgba(${R}, ${G}, ${B}, ${opacity})`
    return result
  },
}

export default Convert
