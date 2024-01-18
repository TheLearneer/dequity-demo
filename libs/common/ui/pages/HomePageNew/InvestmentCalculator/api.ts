import axios, { AxiosResponse } from 'axios';
import { IREState } from './types';

const BASE_URL =
  process.env.NEXT_PUBLIC_SERVICE_ACTIVES ||
  'https://demo.dequity.io/api/actives';

const SERVICE_CALCULATOR = `${BASE_URL}/properties-service/calculator`;

export const fetchGetProfite = (
  propertyId: string,
): Promise<AxiosResponse<IREState>> => {
  return axios.get(`${SERVICE_CALCULATOR}/get-profit/${propertyId}`);
};

export const fetchGetProfiteByInflation = (
  propertyId: string,
  inflation: number,
): Promise<AxiosResponse<IREState>> => {
  return axios.get(
    `${SERVICE_CALCULATOR}/get-profit-by-inflation/${propertyId}`,
    {
      params: { inflation },
    },
  );
};
