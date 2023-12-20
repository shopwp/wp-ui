import { useDebounce } from "@shopwp/hooks"

function Textarea({
  label,
  help = false,
  name,
  rows = 5,
  isHtml = false,
  defaultState,
  settings,
  dispatch,
}) {
  const { useEffect, useState, useRef } = wp.element
  const { TextareaControl } = wp.components
  const [localVal, setLocalVal] = useState(defaultState)
  const debouncedValue = useDebounce(localVal, 300)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (isHtml) {
      if (debouncedValue) {
        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: name, value: btoa(encodeURI(debouncedValue)) },
        })
      } else {
        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: name, value: debouncedValue },
        })
      }
    } else {
      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: name, value: debouncedValue },
      })
    }
  }, [debouncedValue])

  return (
    <TextareaControl
      label={label}
      value={localVal}
      help={help}
      onChange={onChange}
      rows={rows}
    />
  )
}

export default Textarea
