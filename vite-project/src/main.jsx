import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return(
    <div>
      <h3>Custom function app</h3>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }
const anotheruser="Gaurav Negi"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click here to visit',
  anotheruser
)

const anotherElement=(
<a href='https://google.com' target='_blank'>Visit google here</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
