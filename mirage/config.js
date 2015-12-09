import Mirage from 'ember-cli-mirage';

export default function() {
  // Hand when a user tries to login
  this.post('/login', function(db, req) {
    var {username, password} = JSON.parse(req.requestBody);

    if (username === 'ryan@theironyard.com' && password === 'password') {
      return {message: 'ok'};
    }

    return new Mirage.Response(401, {}, {message: 'invalid'});
  });
}
