// const url = 'http://localhost:4200';
const url = 'http://localhost:3000/';
export const environment = {
  production: true,
  http: {
    // homeData:{
    //   homeRoutUrl: url + '/home'
    // },
    get_header_logo: url + 'header_logo',
    get_footer_logo: url + 'footer_logo',
    get_contact_footer: url + 'contact_footer',
    get_media_footer: url + 'media_footer',
    get_header: url + 'header',
    get_footer: url + 'footer'
    // certificateJsonUrl:'http://localhost:3000/sertificat'
  }
};
