import useBreakpoint from './components/breakpoint/useBreakpoint';
import React  from 'react';

const Use = () => {
  const breakpoints = useBreakpoint();

  return (
      <div>
            {
                 Object.keys(breakpoints).map(sizeKey => (
                    <div key={sizeKey}>{sizeKey}:{breakpoints[sizeKey] ? 'true' : 'false'}</div>        
                ))
            }
      </div> 
      )
}

export default Use;