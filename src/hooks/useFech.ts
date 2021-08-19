
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectApiState } from './../modules/api/selectors';
import { apiActions } from 'modules/api/actions';
import { useCallback, useMemo } from 'react';
import  camelcase  from 'camelcase';

const useFetch = (endPoint:any) => {
    const dispatch = useDispatch()
    const apiState = useSelector(selectApiState)

    const performFetch = useCallback(
        (data?) => dispatch(apiActions.fetch(endPoint, data)
        ), [endPoint, dispatch])
    const response = useMemo(()=> apiState[camelcase(endPoint)], [apiState, endPoint])
    

    return {response, performFetch}
}

export default useFetch