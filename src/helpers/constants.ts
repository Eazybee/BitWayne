import { Countries } from './typings';
import USA from '<assests>/icons/usa.svg';
import AUSTRALIA from '<assests>/icons/australia.jpg';
import CANADA from '<assests>/icons/canada.jpg';
import EURO_UNION from '<assests>/icons/european_union.jpg';
import SOUTH_AFRICA from '<assests>/icons/sa.jpg';
import MEXICO from '<assests>/icons/mexico.jpg';
import UK from '<assests>/icons/uk.svg';
import JAPAN from '<assests>/icons/japan.jpg';
import SIGNAPORE from '<assests>/icons/signapore.jpg';


export const isDevelopment = process.env.MODE === 'development';

export const countriesIcon = {
  [Countries.USA]: USA,
  [Countries.AUSTRALIA]: AUSTRALIA,
  [Countries.CANADA]: CANADA,
  [Countries.EUROPEAN_UNION]: EURO_UNION,
  [Countries.MEXICO]: MEXICO,
  [Countries.SOUTH_AFRICA]: SOUTH_AFRICA,
  [Countries.UK]: UK,
  [Countries.JAPAN]: JAPAN,
  [Countries.SIGNAPORE]: SIGNAPORE,
} as Record<any, any>;
