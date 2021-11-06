import React from 'react'
import styled, { css } from 'styled-components'
const name = 'Nilanjan Chakraborty';
const Header = styled.h1`
font-family: "Segoe UI Light";
text-align: center;
`
const element = <Header>Hello, {name}</Header>;

function Component1() {
    return (
        <div>
            {element}
        </div>
    )
}

export default Component1


