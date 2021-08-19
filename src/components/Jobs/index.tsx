import Navigation from "components/common/Navigation";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";
import useFetch from "./../../hooks/useFech";

export default function Jobs() {
  const { response, performFetch } = useFetch(JOBS);
  const { loading, data } = response;
  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <Navigation loading={loading} services={data} />;
}
