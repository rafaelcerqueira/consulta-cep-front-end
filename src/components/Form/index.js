import styled from 'styled-components'

const Form = styled.form`
    background-color: #DE2043;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    margin: auto;

    font-size: 28px;

    width: 500px;

    border-radius: 12px;
    box-shadow: 4px 4px 3rem #01000E;

    h1 {
        text-align: center;
        font-weight: bold;
        margin-bottom: 32px;
    }

    input {
        font-size: inherit;
        margin-bottom: 10px;
        padding: 12px;
    }

    label {
        margin-bottom: 12px;
    }

    button {
        background-color: #292747;
        border: none;
        border-radius: 8px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
    }

    button:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }

    
`;

export default Form;