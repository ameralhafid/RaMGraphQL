import React from 'react';
import { Link}  from "react-router-dom";

import {Button} from "@material-ui/core";

export function Character({ character}) {
    return (

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
                    <Link to={`/character/${character.id}`}>
                        Character details ..
                    </Link>
                    </Button>

                </div>

            </div>

    )
}
