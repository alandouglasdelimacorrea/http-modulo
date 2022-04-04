import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  submitted: boolean = false;

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength]]
    });
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  onSubmit(){
    if(this.form.valid){
      this.submitted = true;
      console.log('submit')
    }

  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    console.log('cancel');

  }

}
