import { Component } from '@angular/core';

interface EspecialItem {
  link: string;
  image: string;
  title: string;
  description:string;
  bgcolor: string;
}
@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.css']
})
export class EducacaoComponent {
  title: string = 'É melhor com a Apple.';
  description: string = 'Faça ainda mais com os produtos e serviços Apple.';

  especialItems: EspecialItem[] = [
    {
      link:"https://tv.apple.com/?WOIsmapCoords=br/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy",
      image:"../../../assets/img/educacao/educação.jpeg",
      description:"EDUCAÇÂO",
      title:"Economize no Mac ou iPad com os preços especiais para a educação.",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/apple-one/",
      image:"../../../assets/img/educacao/negocios.jpeg",
      description:"NEGÓCIOS",
      title:"Seja qual for o tamanho da sua empresa, queremos trabalhar com você.",
      bgcolor: "gray"
    },

  ];
}


