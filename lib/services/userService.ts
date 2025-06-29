import { API_CONFIG_ERR, NETWORK_ERR } from "../constants/errorMessages";

export interface APIUserResponse {
    name: { first: string; last: string };
    email: string;
    picture: { thumbnail: string; large: string };
  }
  
  const ENDPOINT = process.env.NEXT_PUBLIC_RANDOM_USER_API; 
  
  export const fetchRandomUser = async (): Promise<APIUserResponse> => {
    if (!ENDPOINT) throw new Error(API_CONFIG_ERR);
    const res = await fetch(ENDPOINT, { cache: 'no-store' });
    if (!res.ok) throw new Error(NETWORK_ERR);
    const { results } = await res.json();
    return results[0];
  };