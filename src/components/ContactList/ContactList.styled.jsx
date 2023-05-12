import styled from "@emotion/styled";

export const List = styled.ul`   
       width: 380px;
    background-color: #2bcfd747;
    display: flex;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    list-style: none;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 10px auto;
    border-radius: 15px;
    padding: 15px;`;

export const Item = styled.li`font-family: "Libre Baskerville",serif;
text-shadow: gray 0px 1px 1px;
font-size: 24px;
font-style: italic;
font-weight: normal;`;

export const Button = styled.button`  
margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(178 26 26);
    border-radius: 20px;
    color: rgb(178 26 26);
    max-width: 100%;
    font-size: 18px;
    font-family: "Libre Baskerville", serif;
    background-color: rgb(224 137 137 / 0%);
    gap: 5px;
    outline: none;
    cursor: pointer;
    padding: 8px 15px;
    :hover,
    :focus{   
    border-color: white;
    color: white;
    background-color: brown;
    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(167 139 139) 2px 2px 5px;
}`;