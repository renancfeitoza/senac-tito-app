import React, {Fragment} from 'react';

export default class extends React.Component {
  state = {

  }

  render(){
    return(
      <Fragment>
            {React.createElement('h1', {}, 'hello world')}
      </Fragment>
    )
  }
}