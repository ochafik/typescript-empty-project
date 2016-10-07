import Immutable = require('immutable');

document.getElementById('content')!.innerHTML = `
  Hello ${Immutable.Set.of(1, 2, 1)}...
`;
