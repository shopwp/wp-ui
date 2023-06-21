function Radio({
  name,
  settings,
  dispatch,
  options = false,
  label = false,
  help = false,
  disabled = false,
}) {
  const { RadioControl } = wp.components

  function onChange(value) {
    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: value },
    })
  }

  return (
    <RadioControl
      selected={settings[name]}
      label={label}
      options={options}
      onChange={onChange}
      help={help}
      disabled={disabled}
    />
  )
}

export default Radio
