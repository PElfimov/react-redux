import { apiActions } from "modules/api/actions";
import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Jobs() {
  const state = useSelector((state: any) => state.api[JOBS]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiActions.fetch(JOBS));
    api
      .fetch(JOBS)
      .then((res) => dispatch(apiActions.fetchSuccess(JOBS, res)))
      .catch((e) => {
        dispatch(apiActions.fetchFailure(JOBS, e));
      });
  }, []);

  console.log(state);
  return <div>Jobs</div>;
}
