
import React from 'react';
import { useQuery} from '@apollo/react-hooks';
import {GET_CHARACTERS} from '../graphql/get-characters';
import {Character} from '../components/Character';

export function CharactersContainer() {
const { data } = useQuery(GET_CHARACTERS);
return (
  <React.Fragment>
  {data && data.characters && data.characters.results.map((character, index) =>
  <div key={index} className="container">
    <div className="character__image">
    <img scr={character.image} alt={character.name} />
    </div>
    <div className="character__name">
 <h3>{character.name} </h3>
 </div>
 <h3>{character.type} </h3>
 <h4>{character.gender} </h4>
<p>-------------------------------</p>
</div>
 )}


</React.Fragment>

)
}
