import Navigation from "components/common/Navigation";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";
import useFetch from "./../../hooks/useFech";

export default function Jobs() {
  const { response, performFetch } = useFetch(JOBS);
  useEffect(() => {
    performFetch();
  }, [performFetch]);

  console.log(response);
  return <Navigation loading={false} services={[]} />;
}
