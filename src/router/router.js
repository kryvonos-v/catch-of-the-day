import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StorePicker } from '../components/store-picker/store-picker';
import { App } from '../components/app';
import { NotFound } from '../pages/not-found/not-found';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
