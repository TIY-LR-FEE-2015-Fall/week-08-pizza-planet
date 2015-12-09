export default function() {
  // Hand when a user tries to login
  this.post('/login', function(db, req) {
    return {message: 'ok'};
  });
}
