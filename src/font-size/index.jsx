import { useDebounce } from "@shopwp/hooks"

function FontSize({ name, label = false, settings, dispatch, translations }) {
  const { useEffect, useState, useRef } = wp.element
  const { FontSizePicker, BaseControl } = wp.components
  const [localVal, setLocalVal] = useState(getSizeIntFromString(settings[name]))
  const debouncedValue = useDebounce(localVal, 100)
  const isFirstRender = useRef(true)

  const fontSizes = [
    {
      name: translations.a.small,
      slug: "small",
      size: 20,
    },
    {
      name: translations.a.medium,
      slug: "medium",
      size: 32,
    },
    {
      name: translations.a.large,
      slug: "big",
      size: 42,
    },
  ]

  function getSizeIntFromString(value) {
    if (!value) {
      return settings[name]
    }

    return parseInt(value.split("px")[0])
  }

  function onChange(newFontSize) {
    setLocalVal(newFontSize)
  }

  function convertToString(value) {
    return value + "px"
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!debouncedValue) {
      var newVal = settings[name]
    } else {
      var newVal = debouncedValue
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: convertToString(newVal) },
    })
  }, [debouncedValue])

  return (
    <BaseControl label={label}>
      <FontSizePicker
        fontSizes={fontSizes}
        value={localVal}
        fallbackFontSize={settings[name]}
        withSlider={true}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export default FontSize
