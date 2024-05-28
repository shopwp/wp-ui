function Accordion({
  children,
  title,
  icon = false,
  initialOpen = false,
  dispatch = false,
}) {
  const { Panel, PanelBody, PanelRow, Spinner } = wp.components
  const { useState, Suspense } = wp.element
  const [isOpen, setIsOpen] = useState(initialOpen)

  function onTog() {
    var isOpenNow = !isOpen

    setIsOpen(isOpenNow)

    if (dispatch) {
      if (isOpenNow) {
        dispatch({
          type: "ADD_OPENED_ACCORDIONS",
          payload: title,
        })
      } else {
        dispatch({
          type: "REMOVE_OPENED_ACCORDIONS",
          payload: title,
        })
      }
    }
  }

  return (
    <Panel>
      <PanelBody
        title={title}
        icon={icon}
        initialOpen={initialOpen}
        onToggle={onTog}
      >
        <Suspense fallback={<Spinner />}>
          {isOpen && (
            <PanelRow>
              <div className="swp-admin-accordion">{children}</div>
            </PanelRow>
          )}
        </Suspense>
      </PanelBody>
    </Panel>
  )
}

export default Accordion
