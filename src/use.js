import useBreakpoint from './components/breakpoint/useBreakpoint';
import React, { useState, useEffect } from 'react';
const queries = {
  xs: '(max-width: 320px)',
  md: '(max-width: 720px)',
  lg: '(max-width: 1024px)'
}

const Use = () => {
  const matchPoints = useBreakpoint(queries);
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