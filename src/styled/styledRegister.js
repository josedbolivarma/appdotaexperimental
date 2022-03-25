import styled from "styled-components";

export const RegisterStyled = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url("https://images.hdqwalls.com/wallpapers/juggernaut-dota-2-8d.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 0;
`;

export const ImageFileInput = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContainerFormStyled = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    color: #FFF;
    background: rgb(4,0,11);
background: linear-gradient(90deg, rgba(4,0,11,1) 0%, rgba(8,9,26,1) 37%, rgba(42,47,87,1) 77%, rgba(59,59,93,1) 100%);
    height: 94vh;
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap: 40px;
`;

//components
export const FormStyled = styled.form`
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    gap: 10px;
`;

export const BoxForm = styled.div`
    width: 100%;
   
`;

export const InputForm = styled.input`
    width: 98%;
    padding: .2rem 0rem;
    padding-left: .4rem;
    margin: .4rem 0;
`;

export const SelectForm = styled.select`
    width: 100%;
    padding: .2rem .4rem;
    margin: .4rem 0;
`;

export const ButtonStyled = styled.button`
    width: 100%;
    outline: none;
    padding: .34rem .6rem;
    background-color: #333;
    color: #FFF;
    letter-spacing: 1px;
`;