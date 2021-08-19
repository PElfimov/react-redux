import { EMPLOYEES } from "modules/api/endpoints";
import useFetch from "./../../hooks/useFech";
import { useEffect } from "react";
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

  const (filtredData as any[]) = () => {
    if (!job) return data;
    return data.filter((item: any) => item.job === job);
  };

  return <ProfileGrid loading={loading} profiles={filtredData} />;
}
