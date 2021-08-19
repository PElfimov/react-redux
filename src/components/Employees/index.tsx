import { EMPLOYEES } from "modules/api/endpoints";
import useFetch from "./../../hooks/useFech";
import { useEffect, useMemo } from "react";
import ProfileGrid from "components/common/ProfileGrid";
import { useSelector } from "react-redux";
import { selectedJob } from "modules/app/selectors";

export default function Employees() {
  const { response, performFetch } = useFetch(EMPLOYEES);
  const { loading, data } = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const job = useSelector(selectedJob);

  const filteredData = useMemo(() => {
    if (!job) return data;
    return data.filter((item: any) => item.job === job);
  }, [job, data]);

  return <ProfileGrid loading={loading} profiles={filteredData} />;
}
