function HelpText({ text, urlText = "Learn more", url = false }) {
  return (
    <span className="swp-admin-help-text">
      {text}
      {url ? (
        <>
          {" "}
          <a href={url} target="_blank" className="swp-admin-learn-more-link">
            {urlText}
          </a>
        </>
      ) : null}
    </span>
  )
}

export default HelpText
