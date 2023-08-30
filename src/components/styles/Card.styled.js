import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    color: white;
    background-color: #663399;
    border-radius: 15px;
    border: 10px ridge gold;
    box-shadow: 0 0 10px rgba(1, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({layout}) => layout || 'row'};

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`