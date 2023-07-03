import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface CarouselItem {
  link: string;
  image: string;
  description:string
};

interface ContatoItem {
  link: string;
  image: string;
  description:string;
  title: string;
};

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {
  span:string='Loja'
  title: string ='O melhor jeito de'
  description: string ='comprar o que você ama.'

  contatoItems: ContatoItem[] = [
    {
      link: "https://contactretail.apple.com/Help",
      image: "../../../assets/img/lola e logo/perfil.jpg",
      description:"Fale com um especialista.",
      title: "Precisa de ajuda para comprar?",
    },
    {
      link:"Fale com um especialista.",
      image:"../../../assets/img/lola e logo/chatt.jpeg",
      description:"Visite uma loja perto de você",
      title:"Visite uma Apple Store",
    }
  ];


  carouselItems: CarouselItem[] = [
    {
      link: "https://www.apple.com/br/shop/buy-mac",
      image: "../../../assets/img/lola e logo/monitor.png",
      description:"Mac"
    },
    {
      link:"https://www.apple.com/br/shop/buy-iphone",
      image:"../../../assets/img/lola e logo/quatrocell.png",
      description:"iPhone"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad",
      image:"../../../assets/img/lola e logo/iped.png",
      description:"iPad"
    },
    {
      link:"https://www.apple.com/br/shop/buy-watch",
      image:"../../../assets/img/lola e logo/relógio.png",
      description:"Apple Watch"
    },
    {
      link:"https://www.apple.com/br/airpods/",
      image:"../../../assets/img/lola e logo/airpods.png",
      description:"AirPods"
    },
    {
      link:"https://www.apple.com/br/shop/accessories/all/airtag",
      image:"../../../assets/img/lola e logo/raster.png",
      description:"AirTag"
    },
    {
      link:"https://www.apple.com/br/apple-tv-4k",
      image:"../../../assets/img/lola e logo/controle.png",
      description:"Apple TV 4K"
    },
    {
      link:"https://www.apple.com/br/shop/accessories/all",
      image:"../../../assets/img/lola e logo/doisiphones.png",
      description:"Acessórios"
    },
  ];

  @ViewChild('carousel') carousel: any;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:-210,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },
    nav: false
  }

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }
}


