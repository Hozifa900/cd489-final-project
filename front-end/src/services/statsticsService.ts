import axios from "axios";

const BASE_URL = "http://localhost:3006/api/v1/statistics";

const addWbsiteViewStatistics = (action: any) => {
  return axios.post(BASE_URL, { action: action });
};

export { addWbsiteViewStatistics };
