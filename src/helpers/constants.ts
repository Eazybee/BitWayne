import { Countries } from './typings';
import USA from '<assests>/icons/usa.svg';


export const isDevelopment = process.env.MODE === 'development';

export const countriesIcon = {
  [Countries.USA]: USA,
} as Record<any, any>;
