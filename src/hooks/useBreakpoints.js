import { useMemo } from 'react';
import { useMediaQueries } from '@react-hook/media-query';

// Config
import { breakpoints } from '../styles/breakpoints';

export const useBreakpoints = () => {
  const queries = useMemo(() => {
    const allBreakpoints = Object.entries(breakpoints);
    return allBreakpoints.reduce((acc, [key, value]) => {
      const expression = `(${value})`;
      return { ...acc, [key]: expression };
    }, {});
  }, []);

  const { matches } = useMediaQueries(queries);
  const current = Object.keys(matches).findLast((bp) => matches[bp]);

  return { current, matches };
};
