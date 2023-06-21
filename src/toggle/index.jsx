function Toggle({ label, name, settings, dispatch, help = false }) {
  const { ToggleControl } = wp.components

  function onChange(v) {
    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: v },
    })
  }

  return (
    <ToggleControl
      label={label}
      checked={settings[name]}
      onChange={onChange}
      help={help}
    />
  )
}

export default Toggle
