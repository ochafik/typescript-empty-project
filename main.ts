import * as Immutable from 'immutable';

document.getElementById('content')!.innerHTML = `
  Hello ${Immutable.Set.of(1, 2, 1)}...
`;
