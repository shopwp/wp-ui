import { css } from "@emotion/css"

function Row({ children, align, customCSS = false }) {
  const styles = css`
    display: flex;
    flex-direction: row;
    justify-content: ${align};
    align-items: center;

    > .components-notice {
      width: 100%;
    }

    ${customCSS}

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `

  return <div className={styles}>{children}</div>
}

export default Row
