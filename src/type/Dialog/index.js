const DialogType = {
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
}

/**
 * Create dialog options
 * @param {Boolean} show True will show dialog, false will close dialog
 * @param {String} type Type of dialog. Check DialogType
 * @param {String} title The title for Dialog
 * @param {String} description The description for Dialog
 */
const CreateDialogOptions = (show, type, title, description) => {
  return {
    show,
    type,
    title,
    description,
  }
}

export default DialogType
export { CreateDialogOptions }
