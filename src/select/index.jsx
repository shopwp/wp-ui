function Select({
  settings,
  dispatch,
  name,
  options,
  label,
  isInt = false,
  disabled = false,
  help = false,
}) {
  const { SelectControl } = wp.components

  function onChange(newVal) {
    if (isInt) {
      newVal = parseInt(newVal)
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: newVal },
    })
  }

  return (
    <SelectControl
      label={label}
      help={help}
      value={settings[name]}
      options={options}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default Select
