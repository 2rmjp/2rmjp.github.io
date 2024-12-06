import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ArticlePreviewComponent } from "./article-preview/article-preview.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ArticlePreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2rmjp-blog';
  articles = [
    {
      title: 'Muitos nãos e poucos sims, excluir para ganhar',
      imageUrl: 'https://picsum.photos/600/300',
      author: 'João Pedro Gonçalves',
      description: 'Entenda como a qualidade das escolhas impacta diretamente nos seus resultados. Saiba como excluir o que não te agrega para ganhar o que realmente importa.',
    },
    {
      title: 'Metodo 2rm',
      imageUrl: 'https://picsum.photos/600/299',
      author: 'João Pedro Gonçalves',
      description: 'Descubra o Método 2RM e como ele pode transformar sua rotina de treino para maximizar os resultados em menos tempo.',
    },
    {
      title: 'Quais exercícios fazer',
      imageUrl: 'https://picsum.photos/600/298',
      author: 'João Pedro Gonçalves',
      description: 'Saiba como escolher os exercícios certos para alcançar seus objetivos, considerando sua rotina e limitações.',
    },
    {
      title: 'Descanso é mais importante que o exercício',
      imageUrl: 'https://picsum.photos/600/297',
      author: 'João Pedro Gonçalves',
      description: 'Descubra porque o descanso adequado é fundamental para o crescimento muscular e o sucesso dos seus treinos.',
    },
    {
      title: 'Porque exercícios isolados atrapalham',
      imageUrl: 'https://picsum.photos/600/295',
      author: 'João Pedro Gonçalves',
      description: 'Entenda por que focar em exercícios isolados pode ser contraproducente e como integrar movimentos compostos no seu treino.',
    },
    {
      title: 'Divisões erradas atrapalham o descanso',
      imageUrl: 'https://picsum.photos/600/294',
      author: 'João Pedro Gonçalves',
      description: 'Saiba como a divisão incorreta de treino pode prejudicar sua recuperação e os resultados obtidos.',
    },
    {
      title: 'Não confie na balança',
      imageUrl: 'https://picsum.photos/600/293',
      author: 'João Pedro Gonçalves',
      description: 'Entenda por que a balança não é o melhor indicador de progresso e como se concentrar em métricas mais eficientes.',
    },
    {
      title: 'As medidas e o espelho mentem',
      imageUrl: 'https://picsum.photos/600/292',
      author: 'João Pedro Gonçalves',
      description: 'Saiba como confiar mais nos seus resultados reais e não nas medições do espelho e fita métrica.',
    },
    {
      title: 'Tudo que você faz não serve para longevidade',
      imageUrl: 'https://picsum.photos/600/291',
      author: 'João Pedro Gonçalves',
      description: 'Entenda a importância de alinhar seus treinos com os objetivos de longevidade, em vez de apenas resultados imediatos.',
    }
  ];
}