import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ArticlePreviewComponent } from "./article-preview/article-preview.component";
import { CommonModule } from '@angular/common';
import articlesData from '../assets/articles.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ArticlePreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2rmjp-blog';
  articles = articlesData;
}