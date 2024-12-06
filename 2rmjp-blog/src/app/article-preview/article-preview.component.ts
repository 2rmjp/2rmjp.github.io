import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() author!: string;
  @Input() description!: string; // Add description property
}
