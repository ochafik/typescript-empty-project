import * as Immutable from 'immutable';
import {reactExample} from './example';

document.getElementById('content')!.innerHTML = `
  Hello ${Immutable.Set.of(1, 2, 1)}...
`;

reactExample(document.getElementById('react')!);
