import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() objectComment: any;

  commentForm: FormGroup;

  constructor(
    private commentService: CommentService,
    private formBuilder: FormBuilder
  ) {
    this.commentForm = formBuilder.group({
      'text': ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onDelete(comment) {
    confirm('Delete the comment?')
      ? this.commentService.delete(this.objectComment.comments, comment)
      : null;
  }

  onSubmit() {
    if(this.commentForm.valid) {
      const newComment = {
        id: +_.uniqueId('4'),
        text: this.commentForm.value.text
      };

      this.commentService.add(this.objectComment.comments, newComment);
      this.commentForm.reset();
    }
  }
}
