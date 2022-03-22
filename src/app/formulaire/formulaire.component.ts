import { Component, OnInit } from '@angular/core';

import {Article} from '../article/article.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

articles: Article[];

constructor(){
  this.articles=[
    new Article("La fin du Monde","fast.bi.to/endoftheworld/news",14),
    new Article("Piddy is Back","twitter.com/last/news.piddy",10),
    new Article("Le web 3.0","google.com/worldWideweb",4)
    ];
  }

  sortedArticles() :Article[]{
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
  ngOnInit(): void {
  }

  PostNow(title: HTMLInputElement, link: HTMLInputElement)
  {
    console.log(`We are adding ${title.value} and ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0))
    title.value='';
    link.value='';
    return false;
  }

}
