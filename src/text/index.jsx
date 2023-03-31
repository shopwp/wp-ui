import { css } from "@emotion/css"

function Text({ variant, as = "p", children, customCSS = false }) {
  const fontWeightNormal = `font-weight: 400;`
  const fontWeightSemibold = `font-weight: 600;`

  const title = `
        ${fontWeightNormal}
    `

  const titleLarge = `
        font-size: 32px;
        line-height: 40px;
    `

  const titleMedium = `
        font-size: 24px;
        line-height: 32px;
    `

  const titleSmall = `
        font-size: 20px;
        line-height: 28px;
    `

  const subtitle = `
        ${fontWeightSemibold}
        font-size: 14px;
        line-height: 20px;
    `

  const subtitleLarge = `
        font-size: 16px;
        line-height: 24px;
    `

  const subtitleSmall = `
        font-size: 14px;
        line-height: 20px;
    `

  const body = `
        ${fontWeightNormal}
    `

  const bodyLarge = `
        font-size: 16px;
        line-height: 24px;
    
        .is-link {
            font-size: 16px;
        }
    `

  const bodySmall = `
        font-size: 14px;
        line-height: 20px;
    `

  const button = `
		${fontWeightSemibold}
		font-size: 14px;
		line-height: 20px;
    `

  const caption = `
        ${fontWeightNormal}
        font-size: 12px;
        line-height: 16px;
    `

  const label = `
        ${fontWeightSemibold}
        font-size: 12px;
        line-height: 16px;
    `

  const getVariant = (variantName = "body") => {
    switch (variantName) {
      case "title.large":
        return css`
          ${title}
          ${titleLarge}
					${customCSS}
        `
      case "title.medium":
        return css`
          ${title}
          ${titleMedium}
					${customCSS}
        `
      case "title.small":
        return css`
          ${title}
          ${titleSmall}
					${customCSS}
        `

      case "subtitle":
        return css`
          ${subtitle}
          ${subtitleLarge}
					${customCSS}
        `
      case "subtitle.small":
        return css`
          ${subtitle}
          ${subtitleSmall}
					${customCSS}
        `

      case "body":
        return css`
          ${body}
          ${customCSS}
        `

      case "body.large":
        return css`
          ${body}
          ${bodyLarge}
					${customCSS}
        `

      case "body.small":
        return css`
          ${body}
          ${bodySmall}
					${customCSS}
        `

      case "button":
        return button

      case "caption":
        return caption

      case "label":
        return label
    }
  }

  const finalStyles = getVariant(variant)

  return as === "h1" ? (
    <h1 className={finalStyles}>{children}</h1>
  ) : (
    <p className={finalStyles}>{children}</p>
  )
}

export default Text
