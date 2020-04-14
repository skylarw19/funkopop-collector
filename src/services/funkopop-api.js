import tokenService from './tokenService';

const BASE_URL = '/api/funkopops/';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(funkopop) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(funkopop)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

// export function create(funkopop) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(funkopop)
//   }).then(res => res.json())
// }
