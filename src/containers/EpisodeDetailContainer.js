import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';
import {EPISODEBYID} from "../queries/fetchEpisode";
import {EpisodeByID} from "../components/EpisodeByID";

export function EpisodeDetailContainer() {
    let { id } = useParams();

    const { data } = useQuery(EPISODEBYID, {variables: {id}});
   // console.log(data);
  return (
        <div className="character">
            {data && data.episode &&
                 <EpisodeByID key={data.episode.id} episode={data.episode} />
            }
        </div>
  );
}
