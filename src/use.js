import useBreakpoint from './components/breakpoint/useBreakpoint';
import React  from 'react';

const Use = () => {
  const matchPoints = useBreakpoint();
  console.log(
      'MATCH POINTS',
      matchPoints
  )
  let jsx = []
  return (
      <ul>
          {
              matchPoints ?
              Object.keys(matchPoints).forEach(key => {
                jsx.push(<li key={Math.random()}>{key}: {String(matchPoints[key])}</li>)
              })
              : '',
              jsx
          }
      </ul> 
      )
}

export default Use;