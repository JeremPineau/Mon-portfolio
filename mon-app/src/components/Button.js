import styled from 'styled-components';
  
export const Button = styled.div`
   position: fixed; 
   width: 20%;
   left: 50%;
   z-index: 1;
   cursor: pointer;
   color: rgb(70,130,180);
    
   @media(min-width: 252.5px) and (max-width: 400px) {
      font-size: .25em;
      bottom: 3em;
   }
  
   @media(min-width: 400px) and (max-width: 600px) {  
      font-size: .5em;
      bottom: 2.3em;
   }
  
   @media(min-width: 600px) and (max-width: 800px) {
      font-size: 1em;
      bottom: 1.5em;
   }
  
   @media(min-width: 800px) and (max-width: 1000px) {
      font-size: 2em;
      bottom: .9em;
   }
  
   @media(min-width: 1000px) and (max-width: 1200px) {
      font-size: 3em;
      bottom: .7em;
   }
  
   @media(min-width: 1200px) and (max-width: 1400px) {
      font-size: 4em;
      bottom: .6em;
   }
  
   @media(min-width: 1400px) {
      font-size: 5em;
      bottom: .5em;
   }
`