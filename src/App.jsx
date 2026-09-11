import { css } from '@emotion/react';

function App() {
  return <main css={containerStyle}>hot map</main>;
}

const containerStyle = css`
  min-height: 100vh;
  color: #1f2937;
  background-color: #f8fafc;
`;

export default App;
