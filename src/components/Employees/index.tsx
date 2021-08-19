import { EMPLOYEES } from "modules/api/endpoints";
import useFetch from "./../../hooks/useFech";
import { useEffect } from "react";
import ProfileGrid from "components/common/ProfileGrid";

export default function Employees() {
  const { response, performFetch } = useFetch(EMPLOYEES);
  const { loading, data } = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <ProfileGrid loading={loading} profiles={data} />;
}
