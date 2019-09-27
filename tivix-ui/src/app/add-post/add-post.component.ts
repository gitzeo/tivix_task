import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TvxsvcService } from '../services/tvxsvc.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  checkForm;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private http: TvxsvcService) {
    this.checkForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  get f() { return this.checkForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.checkForm.invalid) {
          return;
      }
      
      // alert('SUCCESS!! :-)')
      this.http.addPost(this.checkForm.value).subscribe(data =>{
        this.navigateToStats();
      })

  }
  navigateToStats() {
    this.router.navigate(['postlist'])
  }

}
