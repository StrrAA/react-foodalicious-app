import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
      <List>
        <SmTitle>
        <h4>Search by Category</h4>
        </SmTitle>
        <CuIcons>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Korean"}>
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
      </CuIcons>
    </List>
  );
}


const List = styled.div`
  display: block ;
  justify-content: center;
  margin: 2rem 0rem;
`;
const CuIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;
const SmTitle = styled.div`
  display: flex ;
  justify-content: center;
  margin: 0rem 0rem;

`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0rem 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;

export default Category;
