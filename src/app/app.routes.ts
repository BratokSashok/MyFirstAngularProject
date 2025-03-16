import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

export const routes: Routes = [ 
    { path: "", component: HomeComponent },
    { path: "todos", component: TodoComponent },
    { path: "todos/:id", component: TodoDetailComponent }
    /*,
    { path: "about", component: AboutComponent },
    { path: "**", component: NotFoundComponent }*/
];
