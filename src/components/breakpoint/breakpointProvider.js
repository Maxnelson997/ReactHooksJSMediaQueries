import React, { useState, useEffect } from 'react';
import BreakpointContext from './breakpointContext';

const BreakpointProvider = ({children, queries}) => {

    const [queryMatch, setQueryMatch] = useState({});

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
    
        // gets initial value of matches on page load -- also sets up media query lists for use everywhere else -- also adds listeners.
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

    return (
        <BreakpointContext.Provider value={queryMatch}>
            {children}
        </BreakpointContext.Provider>
    )
}

export default BreakpointProvider;