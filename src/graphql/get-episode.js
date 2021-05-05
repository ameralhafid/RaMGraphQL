
import gql from 'graphql-tag';

export const GET_EPISODE = gql`

{episodes{
  results{ 
    id
  name
  air_date
  episode
  characters{
    id
  name}
  
  }}}
`
