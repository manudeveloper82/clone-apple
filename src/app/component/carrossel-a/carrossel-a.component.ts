import { Component, ViewChild, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface CarouselItem {
  link: string;
  image: string;
  title: string;
  description:string;
  bgcolor: string;
}

@Component({
  selector: 'app-carrossel-a',
  templateUrl: './carrossel-a.component.html',
  styleUrls: ['./carrossel-a.component.css']
})
export class CarrosselAComponent {
  title: string = 'É melhor com a Apple.';
  description: string = 'Faça ainda mais com os produtos e serviços Apple.';

   carouselItems: CarouselItem[] = [
    {
      link:"https://tv.apple.com/?WOIsmapCoords=br/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy",
      image:"../../../assets/img/carrossel-a/store-card-50-tv-services-202303.jpeg",
      description:"APPLE TV+",
      title:"Ganhe três meses de Apple TV+ na compra de um aparelho Apple°.",
      bgcolor: "blue"
    },
    {
      link:"https://www.apple.com/br/apple-one/",
      image:"../../../assets/img/carrossel-a/5-serviços-apple.jpeg",
      description:"",
      title:"Cinco serviços Apple. Uma só assinatura.",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/apple-pay/",
      image:"../../../assets/img/carrossel-a/apple-pay.jpeg",
      description:"",
      title:"Descubra todas as maneiras de usar o Apple Pay.",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/home-app/",
      image:"../../../assets/img/carrossel-a/casa.jpeg" ,
      description:"CASA",
      title:"Veja como um app pode controlar toda a sua casa.",
      bgcolor: "white"
    },

  ];

  @ViewChild('carousel') carousel: any;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    nav: false,
    dots: false,
    margin: 150,
    navSpeed: 700,
    navText: ['', ''],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      640: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  };

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

}
