import React, { FC, useContext } from 'react';
import styled, { StyledComponent, ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import Step, { Position } from '../Step/Step';
import Title from '../../../../ui/Title/Title';
import { ThemeType } from '<hooks>/useTheme';
import styles from './styled.css';
import data from './data';

const Instruction: FC<{}> & {
  Styled: StyledComponent<'section', any, {}>;
} = () => {
  const { colors } = useContext(ThemeContext) as ThemeType;
  return (
    <Instruction.Styled>
      <div>
        <Title color={colors.white}>How To Sell</Title>
        <div className="steps">
          {data.map((step, i: number) => (
            <div key={step.header} className={i % 2 === 0 ? 'lft' : 'rgt'}>
              {i + 1 !== data.length ? <div className="spen" /> : null}
              <Step data={step} side={i % 2 === 0 ? Position.Left : Position.Right} />
            </div>
          ))}
        </div>
        <div className="btn">
          <Link to="/rates" className="btnE">Start Trading Now</Link>
        </div>
      </div>
    </Instruction.Styled>
  );
};

Instruction.Styled = styled.section`
  ${styles}
`;

export default Instruction;
