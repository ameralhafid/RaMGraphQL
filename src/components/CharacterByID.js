import React from 'react';
import { Link} from "react-router-dom";
import {Button} from "@material-ui/core";


export function CharacterByID({ character }) {

    return (

            <div className="character">
                <div className="character__image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character__name">
                    <h4>Name:{character.name}</h4>
                </div>
                <div className="character__meta">

                    <span>gender: {character.gender}</span>
                </div>
                <div className="character__meta">
                <span>type: {character.type}</span>
            </div>
                <div className="character__meta">
                <span>specification:{character.species}</span>
                     </div>
                <div className="character__meta">
                    <span>status: {character.status}</span>

                </div>
                <div className="character__name">
                    All episodes with "{character.name}"
                    {character.episode.map((episode, index) =>
                    <div key={index} className="containerE">

                        <div className="episode__name">
                            <span>Episode's Name:</span>
                        </div>
                        <Button variant="contained" className="btn btn-white" disableElevation>
                            <Link  to={`/episode/${episode.id}`}>
                                {episode.name}
                            </Link>
                        </Button>

                    </div>
                )}
                                    </div>





            </div>


    )
}

