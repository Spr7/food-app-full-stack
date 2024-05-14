import { AxiosResponse } from "axios";

export const isApi200 = (data: AxiosResponse) => data.status === 200;
