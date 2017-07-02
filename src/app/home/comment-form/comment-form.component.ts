import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Comment } from '../../models/comment';
import { CommentService } from '../../services/index';

import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['comment-form.component.scss']
})

export class CommentFormComponent {
    @Output() onAddedComment = new EventEmitter();
    currentComment: Comment;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private commentService: CommentService,
        public snackBar: MdSnackBar) {
        this.initComment();
    }

    /*
    * Init comment object before form will be created
    */
    initComment() {
        this.currentComment = <Comment>{};
        this.currentComment.description = '';
        this.route.params.forEach(param => {
            this.currentComment.articleId = parseInt(param['id']);
        });
    }

    /*
    * Add comment for the article
    */
    addComment() {
        this.currentComment.date = new Date(); // Init current date for comment

        this.commentService.addComment(this.currentComment)
            .subscribe((comment) => {
                this.initComment();
        
                this.onAddedComment.emit();

                // Show snack bar that will inform user that comment was succesfully added
                this.snackBar.open('The comment was successfully added', 'Ok', {
                    duration: 5000,
                });
            });
    }
}