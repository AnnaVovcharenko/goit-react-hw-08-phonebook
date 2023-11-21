import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: rgb(104, 11, 109);
  font-size: 20px;

  &:hover {
    color: #fb00ff;
   
  }
`;