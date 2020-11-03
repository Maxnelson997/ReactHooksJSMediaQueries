import { useState, useEffect } from 'react';

const queries = {
    xs: '(min-width: 320px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)'
}

const useBreakpoint = () => {
    const [queryMatch, setQueryMatch] = useState(null);

    useEffect(() => {   
        const mediaQueryLists = {};
        const keys = Object.keys(queries);
    
        // this function takes the keys and assigns a boolean value based on if it's within the window size with window.matchMedia.matches
        const handleQueryListener = () => {
            const updatedMatches = keys.reduce((updatedMatches, nextSizeKey) => {
                let currentQuery = mediaQueryLists[nextSizeKey]
                let sizeMatches = currentQuery.matches;
                updatedMatches[nextSizeKey] = sizeMatches;
                return updatedMatches;
            }, {});
            setQueryMatch(updatedMatches);
        }
    
        // gets initial value of matches on page load -- also sets up media query lists for use everywhere else.
        const initialLoadMatches = keys.reduce((updatedMatches, nextSizeKey) => {
            mediaQueryLists[nextSizeKey] = window.matchMedia(queries[nextSizeKey])
            mediaQueryLists[nextSizeKey].addListener(handleQueryListener);
            updatedMatches[nextSizeKey] = mediaQueryLists[nextSizeKey].matches
            return updatedMatches
        }, {});
        setQueryMatch(initialLoadMatches);
      return () => {
          keys.forEach(media => {
              mediaQueryLists[media].removeListener(handleQueryListener);
          });
      }
    }, [queries]);
   
    // return the useState value to give this whole hook to be used in another component.
    return queryMatch;
  }
  
  export default useBreakpoint;