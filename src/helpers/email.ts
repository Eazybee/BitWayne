import emailjs from 'emailjs-com';
import { emailContactId, emailServiceId, emailUserId } from './constants';


const sendContactMail = async (
  name: string, userEmail: string, message: string,
) => emailjs.send(
  emailServiceId,
  emailContactId,
  {
    from_name: name,
    from_email: userEmail,
    message,
    reply_to: userEmail,
  },
  emailUserId,
);

export default sendContactMail;
