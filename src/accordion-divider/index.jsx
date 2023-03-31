/** @jsx jsx */
import { jsx, css } from "@emotion/react"

function AccordionDivider({ text, icon }) {
  const { Dashicon } = wp.components

  const DividerCSS = css`
    width: 100%;
    margin-top: 20px;
    margin-right: 0;
    margin-bottom: 5px;
    margin-left: -20px;
    border-bottom: 1px solid #e2e4e7;
    font-size: 15px;
    line-height: 1.1;
    background: #f2f2f2;
    padding: 10px 20px;

    .dashicon {
      position: relative;
      left: -5px;
      width: 17px;
      height: 17px;
      font-size: 17px;
    }
  `

  return (
    <div css={DividerCSS} aria-label="Divider">
      {icon ? <Dashicon icon={icon} /> : null} {text}
    </div>
  )
}

export default wp.element.memo(AccordionDivider)
