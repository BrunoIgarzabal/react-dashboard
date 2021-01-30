import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;

    /**
        Layout
        MH = Main Header
        AS = Aside
        CT = Content
    */

    // AS - 250px ; CT e MH - Automático
    grid-template-columns: 250px auto;

    // MH - 70px ; CT e AS - Automático
    grid-template-rows: 70px auto;

    grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh;
    
`;