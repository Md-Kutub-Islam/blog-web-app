import React from 'react'

// we make a container to add a perticuler features or we can say design, so we can use its feature or design when we create different component 

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container