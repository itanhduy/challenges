const Transform = {
  /**
   * From unstruchure data to options object
   * @param {Array<any>} data The array data needs to format
   * @param fieldValue The field for finding value
   * @param fieldText The field for finding text. Can be a string or array of field that needs to combine
   * @return {Array<{value: String, label: String}>} The list options with formatting
   */
  createOptionData: (data, fieldValue, filedText) => {
    /**
     * Check if data is not array
     * then return empty array
     */
    if (!Array.isArray(data)) return []
    const options = data.map(item => {
      /**
       * Set value with `fieldValue`
       */
      const value = item[fieldValue]

      let label = String()

      /**
       * Check if `filedText` is an array
       * Then loop in it and join the value together
       */
      if (Array.isArray(filedText)) {
        label = filedText
          .map(field => {
            return item[field]
          })
          .join(' ')
      } else {
        /**
         * If `filedText` is not an array
         * Then set it according to `filedText`
         */
        label = item[filedText]
      }

      /**
       * Return object option {value, label}
       */
      return {
        value,
        label,
      }
    })

    return options
  },
}

export default Transform
