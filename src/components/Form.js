import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fileUpload } from '../helpers/fileUpload';
import axios from 'axios';
import { URL } from '../helpers/helpUrl';
import { BoxForm, ButtonStyled, FormStyled, InputForm, SelectForm } from '../styled/styledRegister';

const Form = () => {
    const navigate = useNavigate();

    let initialForm = {
        name: '',
        attack: '',
        rol: '',
        banner: '',
        atributo: ''
    }

    const [register, setRegister] = useState(initialForm);

    const { name, attack, rol, banner, atributo } = register;

    const handleChanged = ({target}) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })
    }

    const handleFileChanged = e => {
        console.log(e.target);
        const file = e.target.files[0];
        fileUpload(file)
            .then(resp => {
                register.banner = resp;
            }).catch(error => {
                console.log(error);
            })
    }

    const postData = () => {
        axios.post(URL, register)
            .then(resp => {
                console.log(resp);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        postData();
        setRegister(initialForm);
        navigate('/');
    }

    return (
        <div>
           <FormStyled id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Héroes</h2>
               <div>
                   <label>Nombre Completo</label>
                   <InputForm required id="inputNombre" name="name" value={name} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Naturaleza de Atributo</label>
                   <SelectForm required id="selectTipo" name="atributo" value={atributo} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="Fuerza" value="Fuerza">Fuerza</option>
                       <option name="Agilidad" value="Agilidad">Agilidad</option>
                       <option name="Inteligencia" value="Inteligencia">Inteligencia</option>
                   </SelectForm>
               </div>
               <div>
                   <label>Tipo de Ataque</label>
                   <InputForm required id="inputNumero" type="text" name="attack" value={attack} onChange={handleChanged}/>
               </div>
               <div>
                   <h2>Roles</h2>
                   <SelectForm required id="selectRol" name="rol" value={rol} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="tanque" value="tanque">Tanque</option>
                       <option name="asesino" value="asesino">Asesino</option>
                       <option name="apoyo" value="apoyo">Apoyo</option>
                       <option name="carry" value="carry">Carry</option>
                       <option name="jungla" value="jungla">Jungla</option>
                   </SelectForm>
               </div>
               
               <div>
                   <label>Imagen</label>
                   <InputForm id="botonImagen" type="file" name="banner" value={banner} onChange={handleFileChanged}/>
                    
               </div>
               <div>
                   <ButtonStyled id="btnRegistro">Enviar</ButtonStyled> 
               </div>
           </FormStyled>
        </div>
    )
}

export default Form;