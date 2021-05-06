import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHARACTERS } from '../graphql/get-characters';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";




export function CharactersContainer() {
        const { data } = useQuery(GET_CHARACTERS);

        return (
            <React.Fragment>
                {data && data.characters && data.characters.results.map((character, index) =>
                    <div className="container">
                        <div className="character">
                            <div className="character__name">
                                <p>{character.name}</p>
                            </div>
                            <div className="character__meta">

                                <span>{character.gender}</span>
                            </div>
                            <div className="character__image">
                                <img src={character.image} alt={character.name} />
                            </div>
                            <Button variant="contained" color="yellow" disableElevation>
                                <Link exact to={`/character/${character.id}`}>
                                    Character details ..
                                </Link>
                            </Button>

                        </div>

                    </div>
                )}

            </React.Fragment>

        );
}

