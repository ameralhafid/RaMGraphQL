import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";


export function EpisodeByID({ episode }) {


    return (

        <div  className="containerE">
            <div className="episode__id">
                <h3>{episode.id} </h3>
            </div>
            <div className="episode__name">
                <h3>{episode.name} </h3>
            </div>
            <div className="episode__air_date">
                <h4>{episode.air_date} </h4>
            </div>
            <div className="episode__episode">
                <h4>{episode.episode} </h4>
            </div>


            <div className="character">

                {episode.characters.map((characters, index) =>
                    <div key={index} className="containerE">

                        <div className="character__name">
                            <h3>{characters.name} </h3>
                        </div>
                        <Button variant="contained" color="secondary" disableElevation>
                            <Link exact to={`/character/${characters.id}`}>
                                Character details ..
                            </Link>
                        </Button>

                    </div>
                )}
            </div>

        </div>


    )
}

