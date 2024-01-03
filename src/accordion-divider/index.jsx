function AccordionDivider({ text, icon }) {
  const { Dashicon } = wp.components

  return (
    <div aria-label="Divider">
      {icon ? <Dashicon icon={icon} /> : null} {text}
    </div>
  )
}

export default wp.element.memo(AccordionDivider)
