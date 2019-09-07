var localtunnel = require('localtunnel');
localtunnel(5000, {
  subdomain: 'likmjshfne'
}, function (err, tunnel) {
  console.log('LT running')
});