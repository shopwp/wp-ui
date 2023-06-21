function Color({ dispatch, label, settings, name }) {
  const { BaseControl, ColorPalette } = wp.components
  const themeSettings = wp.data.select("core/block-editor").getSettings()
  const colors = themeSettings.colors

  function onChange(newColor) {
    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: newColor },
    })
  }

  return (
    <BaseControl label={label}>
      <ColorPalette
        colors={colors}
        value={settings[name]}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export default Color
