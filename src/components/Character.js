import { URL } from "../helpers/helpUrl";
import axios from "axios";
import { useEffect, useState } from "react";
import { BannerStyled, CharacterStyled, ContainerCharactersStyled, CharacterDescription, AtributteStyled, CharacterSkills } from "../styled/styledcomponents";

const Character = () => {
    const [character, setCharacter] = useState([]);

    const getData = () => {
        axios.get(URL)
            .then(response => {
                console.log(response.data);
                setCharacter(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
            <ContainerCharactersStyled>

            {
                character.map((character) => {

                    return (
                        <CharacterStyled key={character.id}>
                            <CharacterDescription>
                            <h4>{character.attack}</h4>
                           
                            <h2>{character.name}</h2>
                            <CharacterSkills>
                                <h4>{character.rol}</h4>
                            </CharacterSkills>
                            <AtributteStyled atributo={character.atributo.toLocaleLowerCase()}>
                                {character.atributo}
                            </AtributteStyled>
                            </CharacterDescription>
                            <BannerStyled src={character.banner}/>
                        </CharacterStyled>  
                    )
                })
            }
            </ContainerCharactersStyled>
    )
}

export default Character;