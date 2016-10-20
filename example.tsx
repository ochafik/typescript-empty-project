import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Example = ({children}: {children: any}) => <span>Hello {children}</span>;

export function reactExample(target: HTMLElement) {
  ReactDOM.render(<Example children="aha"><div>123</div></Example>, target);
}
