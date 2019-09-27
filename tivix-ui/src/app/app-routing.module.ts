import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';


const routes: Routes = [
  {path: '', redirectTo: 'postlist', pathMatch: 'full' },
  {path: 'addpost', component: AddPostComponent},
  {path: 'viewpost/:pid', component: ViewPostComponent},
  {path: 'postlist', component: PostsComponent},
  {path: 'editpost/:pid', component: EditPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
