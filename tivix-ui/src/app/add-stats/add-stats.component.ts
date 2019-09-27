import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stats',
  templateUrl: './add-stats.component.html',
  styleUrls: ['./add-stats.component.scss']
})
export class AddStatsComponent implements OnInit {
  checkForm;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    this.checkForm = this.formBuilder.group({
      fileSize: ['', [Validators.required]],
      fileName: ['', [Validators.required]],
      fileDate: ['', [Validators.required]]
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

      alert('SUCCESS!! :-)')
  }
  navigateToStats() {
    this.router.navigate(['stats'])
  }
  
}
