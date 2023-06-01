import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface CarouselItem {
  link: string;
  image: string;
  description:string;
  title: string;
  valor:string
}

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  titulo: string = 'As novidades';
  subtitulo: string = 'Veja o que acabou de chegar.';

  carouselItems: CarouselItem[] = [
    {
      link: "https://www.apple.com/br/shop/buy-iphone/iphone-14-pro",
      image: "../../../assets/img/carrossel/6phones.jpg",
      description:"IPHONE 14",
      title: "Maravilindo.",
      valor:"A partir de R$ 7.599"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad",
      image:"../../../assets/img/carrossel/iMac.jpg",
      description:"IPAD",
      title:"Inspira. Desenha. Diverte",
      valor:"A partir de R$ 5.299"
    },
    {
      link:"https://www.apple.com/br/shop/buy-watch/apple-watch",
      image:"../../../assets/img/carrossel/8relogio.jpg",
      description:"APPLE WATCH SE",
      title:"Para amar cada segundo.",
      valor:"A partir de R$ 3.399"
    },
    {
      link:"https://www.apple.com/br/shop/buy-iphone/iphone-14-pro",
      image:"../../../assets/img/carrossel/4phone.jpg",
      description:"IPHONE 14 PRO",
      title:"Pro. E além.",
      valor:"A partir de R$ 9.599"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad-pro",
      image:"../../../assets/img/carrossel/iPadPro.jpg",
      description:"IPAD PRO",
      title:"Com a potência do M2.",
      valor:"A partir de R$ 9.799"
    },
    {
      link:"https://www.apple.com/br/shop/buy-watch/apple-watch-ultra",
      image:"../../../assets/img/carrossel/3relógio.jpg",
      description:"APPLE WATCH ULTRA",
      title:"A aventura te espera.",
      valor:"A partir de R$ 10.299"
    },
    {
      link:"https://www.apple.com/br/shop/buy-ipad/ipad-pro",
      image:"../../../assets/img/carrossel/iPad.jpg",
      description:"MACBOOK PRO DE 14 E 16 POL.",
      title:"Desbrava fronteiras. Derruba barreiras.",
      valor:"A partir de R$ 23.999"
    },
    {
      link:"https://www.apple.com/br/shop/buy-mac/mac-mini",
      image:"../../../assets/img/carrossel/MecMin.jpg",
      description:"MAC MINI",
      title:"Mais músculo. Mais cérebro.",
      valor:"A partir de R$ 7.499"
    },
    {
      link:"https://www.apple.com/br/shop/watch/bands",
      image:"../../../assets/img/carrossel/pulseiras.jpg",
      description:"ACESSÓRIOS",
      title:"Novas cores. <br> Todos os estilos.",
      valor:"A partir de R$ 7.599"
    },


  ];

  @ViewChild('carousel') carousel: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }
}
