import { useMemo } from 'react';
import { useMediaQueries } from '@react-hook/media-query';

// Config
import { breakpoints } from '../styles/breakpoints';

export const useBreakpoints = () => {
  const queries = useMemo(() => {
    const allBreakpoints = Object.entries(breakpoints);
    return allBreakpoints.reduce((acc, [key, value], index) => {
      const expression = `(${value})`;
      return { ...acc, [key]: expression };
    }, {});
  }, []);

  const { matches } = useMediaQueries(queries);

  return { matches };
};
