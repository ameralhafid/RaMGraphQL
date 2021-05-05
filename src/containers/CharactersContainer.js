import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Character } from '../components/Character';
import { GET_CHARACTERS } from '../graphql/get-characters';
import Grid from '@material-ui/core/Grid';
import FormLabel from "@material-ui/core/FormLabel";




export function CharactersContainer() {
        const { data } = useQuery(GET_CHARACTERS);

        return (
            <Grid container className={classes.root} spacing={2}>
                <Grid item >
                    <Grid container justify="center" spacing={spacing}>
                    {data && data.characters && data.characters.results.map(
                        <Grid key={value} item>
                            character =>
                        <Character key={character.id} character={character} />


                        </Grid> )}
                        </Grid>
                        </Grid>
                        </Grid>

        );
}

