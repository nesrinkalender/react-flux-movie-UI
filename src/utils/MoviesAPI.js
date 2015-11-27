import AppActions from '../actions/app-actions';
import request from 'superagent';


export default {
  get(url) {
    return new Promise(function(resolve, reject) {
      request
        .get(url + '?api_key=0add3c897eb656a62cd72aebb3d941d5')
        .end((err, res) => {
          if (res.status === 404) {
            reject();
          } else {
            console.log('moviesAPI.js response', res);
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
}
