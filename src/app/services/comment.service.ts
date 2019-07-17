import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  mockComments = {
    comments: [
      {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 1'},
      {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 2'},
      {id: 3, text: 'Test'},
      {id: 4, text: 'apple'},
    ],
    level: 0,
    subComments: {
      level: 1,
      comments: [
        {id: 10, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. SUB 1'},
        {id: 11, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. SUB 2'}
      ],
      subComments: {
        level: 2,
        comments: [
          {id: 20, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. inner SUB 1'},
        ],
        subComments: {
          level: 3,
          comments: []
        }
      }
    },
  };

  constructor() { }

  get() {
    return this.mockComments;
  }

  add(comments, newComment) {
    comments.push(newComment);
  }

  delete(comments, existComment) {
    _.remove(comments, {id: existComment.id});
  }

  filter(value) {
    return _.filter(this.mockComments.comments, (item: any) => {
      if(item.text.includes(value)) {
        return item;
      }
    });
  }
}
