import emailjs from 'emailjs-com';


export default function sendEmail(e) {

   
    return emailjs.sendForm('service_bsc0d7d', 'template_t8qn4h8', e.target, 'user_jBHGH1YMaidwVPHhS30WC')

 
}