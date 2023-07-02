import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h1>My Dogs app</h1>
      <img src='' alt='some awesome Dog' />
      <Link to='/home'><button>Start</button> </Link>
			<h2>Por cierto soy el landing</h2> 
    </div>
  )
}

export default Landing