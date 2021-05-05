import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {CHARACTERINEPISODE} from "../queries/fetchCharacterInEpisode";
import {useParams} from 'react-router-dom';
import {CharacterEpidoses} from '../components/CharacterEpidoses';

export function CharacterInEpisodes() {
    let { id } = useParams();

    const { data } = useQuery(CHARACTERINEPISODE, {variables: {id}});
    // console.log(data);
    return (
        <div className="character">
            {data && data.character &&
            <CharacterEpidoses key={data.character.id} character={data.character} />
            }
        </div>
    );
}



