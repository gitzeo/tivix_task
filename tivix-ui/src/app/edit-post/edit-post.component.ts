import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TvxsvcService } from '../services/tvxsvc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  pid: number;
  checkForm;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private http: TvxsvcService) {
    this.checkForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.route.params.subscribe(params => {
      this.pid = params.pid;
    })
   }

  ngOnInit() {
    this.http.getPost(this.pid).subscribe(data =>{
      let fdata = data ? data[0] : {};

      this.checkForm.setValue( {title: fdata.title, description: fdata.description});
    })
  }

  get f() { return this.checkForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.checkForm.invalid) {
          return;
      }
      
      // alert('SUCCESS!! :-)')
      this.http.savePost(this.pid, this.checkForm.value).subscribe(data =>{
        this.navigateToStats();
      })

  }
  navigateToStats() {
    this.router.navigate(['postlist'])
  }
}
