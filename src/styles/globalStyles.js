import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
    --color-text: #1f2937;
    --color-background: #ffffff;
    --color-border: #e5e7eb;
    --color-primary: #7c3aed;

    font-family:
      Pretendard,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
    color: var(--color-text);
    background-color: var(--color-background);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
  }

  body {
    min-width: 320px;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }
`;
