import { createGlobalStyle } from 'styled-components';
import NexaBold from './Nexa-Bold.otf';
import NexaRegular from './NexaRegular.otf'



const Typography = createGlobalStyle`

@font-face {
    font-family: 'Nexa Bold';
    src: url(${NexaBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'Nexa Regular';
    src: url(${NexaRegular});
    font-style: normal;
  }
`;


export default Typography;
