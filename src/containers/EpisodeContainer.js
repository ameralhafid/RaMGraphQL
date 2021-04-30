
import React from 'react';
import { useQuery} from '@apollo/react-hooks';
import {GET_EPISODE} from '../graphql/get-episode';
import {Episode} from '../components/Episode';

export function EpisodeContainer() {
const { data } = useQuery(GET_EPISODE);
return (
  <React.Fragment>
  {data && data.episodes && data.episodes.results.map((episode, index) =>
  <div key={index} className="containerE">
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
 <p>-------------------------------</p>
 </div>
)}

</React.Fragment>

)
}
