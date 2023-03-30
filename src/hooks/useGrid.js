import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../features/view/viewSlice';
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

const useGrid = () => {
  const dispatch = useDispatch();
  const [enabledState, setEnabledState] = useLocalStorage('grid-enabled');
  const prefersGrid = usePrefersGrid();
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersGrid;

  useEffect(() => {
    dispatch(setView(enabled));
  }, [enabled, dispatch]);

  return [enabled, setEnabledState];
};

const usePrefersGrid = () => {
  return useMedia(['(max-width: 600px)'], [false], true);
};

export default useGrid;
