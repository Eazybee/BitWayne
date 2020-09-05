import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


export type Props = {

};

type PropAndTheme = Props & { theme: ThemeType };

const styled = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 3rem 0;
    background-color: ${colors.lightPurple};

    & > *:not(:last-child){
      margin-bottom: 1rem;
    }

    @media screen  and (max-width:420px){
      padding: 3rem 1rem;
    }
  `}
`;

export default styled;
