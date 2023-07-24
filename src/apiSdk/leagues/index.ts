import axios from 'axios';
import queryString from 'query-string';
import { LeagueInterface, LeagueGetQueryInterface } from 'interfaces/league';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeagues = async (query?: LeagueGetQueryInterface): Promise<PaginatedInterface<LeagueInterface>> => {
  const response = await axios.get('/api/leagues', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLeague = async (league: LeagueInterface) => {
  const response = await axios.post('/api/leagues', league);
  return response.data;
};

export const updateLeagueById = async (id: string, league: LeagueInterface) => {
  const response = await axios.put(`/api/leagues/${id}`, league);
  return response.data;
};

export const getLeagueById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/leagues/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLeagueById = async (id: string) => {
  const response = await axios.delete(`/api/leagues/${id}`);
  return response.data;
};
