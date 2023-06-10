import { Component, ViewChild, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


interface CarouselItem {
  link: string;
  image: string;
  description:string;
  title: string;
  value:string;
  bgcolor: string;
}

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent{
  title: string = 'As novidades';
  description: string = 'Veja o que acabou de chegar.';

   carouselItems: CarouselItem[] = [
    {
      link:"https://www.apple.com/br/shop/buy-mac/macbook-air",
      image:"../../../assets/img/carrossel/nottop.jpeg",
      description:"MACBOOK AIR DE 15 POLEGADAS",
      title:"Espaçoso sem perder a fineza.",
      value:"A partir de R$ 14.999",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad-air",
      image:"../../../assets/img/carrossel/tab vent.jpeg",
      description:"IPAD AIR",
      title:"Cor e potência no ar.",
      value:"A partir de R$ 6.999",
      bgcolor: "black"
    },
    {
      link:"https://www.apple.com/br/shop/product/MRTL3AM/A/pulseira-esportiva-edi%C3%A7%C3%A3o-orgulho-para-caixa-de-41-mm-p-m",
      image:"../../../assets/img/carrossel/relogio mix.jpeg",
      description:"PULSEIRA ESPORTIVA EDIÇÃO ORGULHO",
      title:"O orgulho vai se espalhar.",
      value:"A partir de R$ 499",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-iphone/iphone-14-pro",
      image:"../../../assets/img/carrossel/4phone.jpg" ,
      description:"IPHONE 14 PRO",
      title:"Pro. E além.",
      value:"A partir de R$ 9.599",
      bgcolor: "black"
    },
    {
      link:"https://www.apple.com/br/shop/buy-mac/mac-studio",
      image:"../../../assets/img/carrossel/m2max.jpeg",
      description:"NAC STUDIO",
      title:"Com a potência do M2 Max e M2 Ultra.",
      value:"A partir de R$ 22.999",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad-pro",
      image:"../../../assets/img/carrossel/iPad.jpg",
      description:"MACBOOK PRO DE 14 E 16 POL.",
      title:"Desbrava fronteiras. Derruba barreiras.",
      value:"A partir de R$ 23.999",
      bgcolor: "black"
    },
    {
      link: "https://www.apple.com/br/shop/buy-iphone/iphone-14-pro",
      image: "../../../assets/img/carrossel/6phones.jpg",
      description:"IPHONE 14",
      title: "Maravilindo.",
      value:"A partir de R$ 7.599",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad",
      image:"../../../assets/img/carrossel/iMac.jpg",
      description:"IPAD",
      title:"Inspira. Desenha. Diverte",
      value:"A partir de R$ 5.299",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-watch/apple-watch",
      image:"../../../assets/img/carrossel/8relogio.jpg",
      description:"APPLE WATCH SE",
      title:"Para amar cada segundo.",
      value:"A partir de R$ 3.399",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad-pro",
      image:"../../../assets/img/carrossel/iPadPro.jpg",
      description:"IPAD PRO",
      title:"Com a potência do M2.",
      value:"A partir de R$ 9.799",
      bgcolor: "black"
    },
    {
      link:"https://www.apple.com/br/shop/buy-watch/apple-watch-ultra",
      image:"../../../assets/img/carrossel/3relógio.jpg",
      description:"APPLE WATCH ULTRA",
      title:"A aventura te espera.",
      value:"A partir de R$ 10.299",
      bgcolor: "white"
    },
    {
      link:"https://www.apple.com/br/shop/buy-mac/mac-mini",
      image:"../../../assets/img/carrossel/MecMin.jpg",
      description:"MAC MINI",
      title:"Mais músculo. Mais cérebro.",
      value:"A partir de R$ 7.499",
      bgcolor: "black"
    },
    {
      link:"https://www.apple.com/br/shop/watch/bands",
      image:"../../../assets/img/carrossel/pulseiras.jpg",
      description:"ACESSÓRIOS",
      title:"Novas cores. Todos os estilos.",
      value:"A partir de R$ 7.599",
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
    margin: -96,
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
