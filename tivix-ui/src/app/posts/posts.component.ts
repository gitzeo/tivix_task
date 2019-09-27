import { Component, OnInit } from '@angular/core';
import { TvxsvcService } from '../services/tvxsvc.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  plist: any[];
  constructor(private httpsvc: TvxsvcService) { }

  ngOnInit() {
    this.loadPosts();
  }
  loadPosts(){
    this.httpsvc.getPostList().subscribe(data =>{
      this.plist = data;
    })
  }

  delete(pid:number) {
    this.httpsvc.delete(pid).subscribe(data=>{
      this.loadPosts();
    })
  }


}
