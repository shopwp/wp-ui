import { useDebounce } from "@shopwp/hooks"

function TextControl({
  settings,
  dispatch,
  label,
  help = false,
  name,
  placeholder = "",
  fallback = "",
  disabled = false,
  type = "text",
}) {
  const { useEffect, useState } = wp.element
  const { TextControl } = wp.components
  const [localVal, setLocalVal] = useState(() =>
    settings[name] ? settings[name] : ""
  )
  const debouncedValue = useDebounce(localVal, 300)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (type === "Number") {
      var newValue = parseInt(localVal ? localVal : fallback)
    } else {
      var newValue = localVal ? localVal : fallback
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: {
        key: name,
        value: newValue,
      },
    })
  }, [debouncedValue])

  return (
    <TextControl
      label={label}
      value={localVal}
      help={help}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
    />
  )
}

export default TextControl
