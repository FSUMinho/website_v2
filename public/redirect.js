// redirect.js
(function() {
    var path = window.location.pathname;
    var query = window.location.search;
    var hash = window.location.hash;
    var newPath = '/' + (path + query + hash).replace(/^\//, '');
    window.location.replace(newPath);
  })();
  