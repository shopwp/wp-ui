function cropOptions(t) {
  return [
    {
      label: t.a.none,
      value: "none",
    },
    {
      label: t.a.top,
      value: "top",
    },
    {
      label: t.a.center,
      value: "center",
    },
    {
      label: t.a.bottom,
      value: "bottom",
    },
    {
      label: t.a.left,
      value: "left",
    },
    {
      label: t.a.right,
      value: "right",
    },
  ]
}

function scaleOptions(t) {
  return [
    {
      label: t.a.none,
      value: 1,
    },
    {
      label: t.a["2"],
      value: 2,
    },
    {
      label: t.a["3"],
      value: 3,
    },
  ]
}

export { cropOptions, scaleOptions }
