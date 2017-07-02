import { Component, Input } from '@angular/core';
import { Comment } from '../../_models/index';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})

export class CommentListComponent {
    @Input() comments: Comment[];
}