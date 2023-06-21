import { useDebounce } from "@shopwp/hooks"

function Range({
  settings,
  dispatch,
  name,
  label,
  min = 1,
  max = 1000,
  step = 1,
  help = false,
  isFloat = false,
  isPx = false,
  fallback = false,
  allowReset = true,
}) {
  const { useEffect, useState, useRef } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(
    isFloat ? parseFloat(settings[name]) : settings[name]
  )
  const debouncedValue = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!debouncedValue) {
      var newV = fallback
    } else {
      var newV = isFloat ? debouncedValue.toString() : debouncedValue

      if (isPx) {
        newV = newV + "px"
      }
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: {
        key: name,
        value: newV,
      },
    })
  }, [debouncedValue])

  return (
    <RangeControl
      label={label}
      help={help}
      value={localVal ? localVal : false}
      onChange={onChange}
      allowReset={allowReset}
      resetFallbackValue={fallback}
      min={min}
      max={max}
      step={step}
    />
  )
}

export default Range
