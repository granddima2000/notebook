// import { Component } from "react";

// import './app-header.css';
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #32abd0;
    background-color: #fff;
    h1 {
        font-size: 25px;
        :hover{
            color:red;
        }

    }
    h2 {
        font-size: 25px;
    }

`;

const AppHeader = (props) => {
    return (
        <Header>
            <div>
                <h1>Дмитрий Расторгуев</h1>
            </div>
            <div>
                <div>План:</div>
                <h2>Задач: {props.task}</h2>
            </div>
            
        </Header>
    );
};

export default AppHeader;