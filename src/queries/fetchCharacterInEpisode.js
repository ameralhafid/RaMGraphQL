import gql from 'graphql-tag';

export const CHARACTERINEPISODE = gql`
query GetCharacter($id: ID!){
  character(id: $id){

    episode{
    id
    name
    characters{
    id
    name
    }
    }
}
    }

    `;