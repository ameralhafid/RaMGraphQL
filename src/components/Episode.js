
import React from 'react';

import { Link}  from "react-router-dom";

import {Button} from "@material-ui/core"

export function Episode({episode}) {
  return(
      <div  className="container">
        <div className="character__name">
          <h3>{episode.name} </h3>
        </div>
        <div className="character__name">
          <h3>{episode.id} </h3>
        </div>
        <div className="character__meta">
          <h4>{episode.air_date} </h4>
        </div>
        <Button variant="contained" color="yellow" disableElevation>
    <Link exact to={`/character/${episode.id}`}>
        Character details ..
    </Link>
    </Button>
        </div>


  )
}
