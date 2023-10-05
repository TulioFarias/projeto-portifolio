import { createGlobalStyle } from 'styled-components'

import Background from '../assets/back.gif'

export default createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

 }

 body{
    background: url('${Background}');
    background-repeat: no-repeat;
    background-size: cover;

 }


`
