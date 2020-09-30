import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


const styles = css`
 ${({ theme: { colors } }: { theme: ThemeType }) => `
    padding: 10rem 1rem 5rem 1rem;
    display: flex;
    justify-content: center;

    & > span {
      background: ${colors.primary};
      width: 100%;
      position: fixed;
      top: 0;
      height: 4rem;
    }
    &>div {
      width: 68rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
 `}
`;

export default styles;
