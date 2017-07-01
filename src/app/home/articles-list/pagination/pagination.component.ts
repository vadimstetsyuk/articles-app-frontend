import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnChanges {
    @Input() articles: Article[];
    @Input() itemsPerPage: number;
    @Output() onPageChanged: EventEmitter<number>;
    pages: number[];
    currentPage: number;

    constructor() {
        this.onPageChanged = new EventEmitter();
        this.pages = [];
        this.currentPage = 1;
    }

    ngOnChanges() {
        this.initPages();
    }

    onPageClicked(page: number) {
        this.initPages();

        if (page > this.pages.length || page < 1) {
            this.currentPage = this.currentPage;
        } else {
            this.currentPage = page;
            this.onPageChanged.emit(this.currentPage);
        }
    }

    initPages() {
        let countPages = Math.ceil(this.articles.length / this.itemsPerPage);

        this.pages = [];
        // Fill pages array
        for (var i = 1; i <= countPages; i++)
            this.pages.push(i);
    }
}