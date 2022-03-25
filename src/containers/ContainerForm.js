import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import { URL } from "../helpers/helpUrl";
import { ContainerFormStyled, ImageFileInput } from "../styled/styledRegister";

const ContainerForm = () => {

    const [banner, setBanner] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(URL);      
            //Tenemos un array de banners en request.data
            //Generamos un número random entre 0 y la longitud del array, para obtener un índice aleatorio
            const random = Math.floor(Math.random()* request.data.length);
            //Mostraremos en pantalla request.data[random]
            setBanner(request.data[random]);
            console.log(banner?.banner);
            console.log(random);
            return request;
        };
        fetchData()  
    }, [])


    return (
        <ContainerFormStyled>
            <ImageFileInput src={banner?.banner} />
            <Form />
        </ContainerFormStyled>
    )
}

export default ContainerForm;