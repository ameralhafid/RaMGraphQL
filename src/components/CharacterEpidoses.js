import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {CHARACTERINEPISODE} from "../queries/fetchCharacterInEpisode";
import {useParams} from 'react-router-dom';
export function CharacterEpidoses({ episode }) {
    let { episodeID } = useParams();
    const { data } = useQuery(CHARACTERINEPISODE, {variables: {episodeID}});


    return (

        <div className="character">
            <div className="character__name">
                <p>{episodeID.name}</p>
            </div>
            <div className="character__meta">

                <span>{episodeID.id}</span>
            </div>


        </div>


    )
}
