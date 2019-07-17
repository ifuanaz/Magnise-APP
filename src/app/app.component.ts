import { Component, OnInit } from '@angular/core';
import { CommentService } from './services/comment.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  objectComment: any;
  filteredComments: any;
  filter = new FormControl('', [Validators.required]);

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.filteredComments = this.commentService.get();
    this.objectComment = this.commentService.get();

    this.filter.valueChanges.subscribe(value => {
      const result = this.commentService.filter(value);

      this.filteredComments.comments = result;
    });
  }
}
