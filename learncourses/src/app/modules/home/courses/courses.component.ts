import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-couses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  form!: FormGroup;
  posts: { content: string; title: string; id: string }[] = [];
  constructor(private fb: FormBuilder, private ownservice: CoursesService) {
    this.form = fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  ngOnInit(): void {
    this.ownservice.getAll().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
  sendRequest() {
    console.log(this.form.value);
    this.ownservice.PostArticle(this.form.value).subscribe((data) => {
      console.log(data);
      this.fetchAll();
    });

  }
  deleteAll(){

    this.ownservice.deleteAllPosts().subscribe((response:any)=>{
console.warn(response);
this.fetchAll();

    })
  }
  fetchAll(){
    this.ownservice.getAll().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
