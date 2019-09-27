import { Component, OnInit } from '@angular/core';
import { TvxsvcService } from '../services/tvxsvc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  post: any;
  pid: number;

  constructor(private http: TvxsvcService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.pid = params.pid;
    })
  }

  ngOnInit() {
    this.http.getPost(this.pid).subscribe(data =>{
      this.post = data ? data[0] : {};
    })
  }

}
