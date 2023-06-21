import without from "lodash-es/without"

function Checkbox({
  settings,
  dispatch,
  name = "excludes",
  options,
  label,
  differentSettings = false,
}) {
  const { useEffect, useState, useRef } = wp.element
  const { CheckboxControl, BaseControl } = wp.components
  const [excludesState, setExcludesState] = useState(settings[name])

  const [includesState, setIncludesState] = useState(
    options.reduce(function (prev, current) {
      prev[current.value] = settings[current.value]

      return prev
    }, {})
  )

  const isFirstRender = useRef(true)

  function inState(excludesState, type) {
    if (excludesState.includes(type)) {
      return true
    } else {
      return false
    }
  }

  function onChange(isChecked, type) {
    if (differentSettings) {
      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: type, value: isChecked },
      })

      includesState[type] = isChecked

      setIncludesState(includesState)
      return
    }

    if (isChecked && inState(excludesState, type)) {
      return
    }

    if (isChecked) {
      setExcludesState(excludesState.concat([type]))
    } else {
      var valueWithout = without(excludesState, type)

      setExcludesState(valueWithout)
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: excludesState },
    })
  }, [excludesState])

  function Check({ option }) {
    return (
      <CheckboxControl
        label={option.label}
        checked={
          differentSettings
            ? includesState[option.value]
            : inState(excludesState, option.value)
        }
        onChange={(isChecked) => onChange(isChecked, option.value)}
      />
    )
  }

  return (
    <>
      <BaseControl label={label} />
      {options.map((option) => (
        <Check key={option.value} option={option} />
      ))}
    </>
  )
}

export default Checkbox
