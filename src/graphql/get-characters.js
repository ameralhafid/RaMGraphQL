
import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`

{characters{results{
  id
  name
  status
  species
  type
  gender
  origin{
    name

  }
  location{
    name

  }
  image
  episode{
  id
  name}

}
}
}`
