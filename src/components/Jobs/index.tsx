import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";

export default function Jobs() {
  useEffect(() => {
    api.fetch(JOBS).then((res) => console.log(`response`, res));
  }, []);
  return <div>Jobs</div>;
}
