//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {provideStore} from '@ngrx/store'
import {todos, visibilityFilter} from './todos';

bootstrap(App, [
  provideStore({todos, visibilityFilter}, {todos: [{id: 1, text: 'learn ng2', completed: false}]})  
])
.catch(err => console.error(err));