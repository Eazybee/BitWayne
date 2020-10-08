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


export const appId = process.env.REACT_APP_FIRE_ID;
export const apiKey = process.env.REACT_APP_FIRE_KEY;
export const authDomain = process.env.REACT_APP_FIRE_AUTH_DOMAIN;
export const databaseURL = process.env.REACT_APP_FIRE_DB;
export const projectId = process.env.REACT_APP_FIRE_PROJECT_ID;
export const storageBucket = process.env.REACT_APP_FIRE_STORAGE_KEY;
export const messagingSenderId = process.env.REACT_APP_FIRE_MSG_SENDER_ID;
export const measurementId = process.env.REACT_APP_FIRE_MEASUREMNET_ID;
export const captchaKey = process.env.REACT_APP_GOOGLE_CAPTCHA;
export const emailUserId = process.env.REACT_APP_EMAIL_USER_ID as string;
export const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
export const emailContactId = process.env.REACT_APP_EMAIL_CONTACT_ID as string;

