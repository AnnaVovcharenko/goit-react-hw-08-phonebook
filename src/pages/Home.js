import { UsergroupAddOutlined } from "@ant-design/icons";  
import {  Wrapper, Title } from "./Home.styled";

  export default function Home() {
    return (
      <Wrapper>
        <Title >
        Your personal Contact Book{' '}
          
            <UsergroupAddOutlined />
          
        </Title>
      </Wrapper>
    );
  }
  