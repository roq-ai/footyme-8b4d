import { LeagueInterface } from 'interfaces/league';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  date: any;
  location: string;
  league_id?: string;
  created_at?: any;
  updated_at?: any;

  league?: LeagueInterface;
  _count?: {};
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  league_id?: string;
}
