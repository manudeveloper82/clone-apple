import { Component, ViewChild, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface CarouselItem {
  link: string;
  image: string;
  title: string;
  value:string;
  bottom: string;
}

@Component({
  selector: 'app-carrossel-a',
  templateUrl: './carrossel-a.component.html',
  styleUrls: ['./carrossel-a.component.css']
})
export class CarrosselAComponent {

    title: string = 'As novidades';
    description: string = 'Veja o que acabou de chegar.';

     carouselItems: CarouselItem[] = [
      {
        link: "https://www.apple.com/br/shop/accessories/all/seasonal-colors",
        image: "../../../assets/img/carrossel-a/store-card-40-accessories-202303_GEO_BR.jpeg",
        title: "Novas cores",
        value:"Para seus acessórios favoritos lançarem tendências.",
        bottom: "top"
      },
      {
        link:"https://www.apple.com/br/shop/buy-ipad/ipad",
        image:"../../../assets/img/carrossel-a/MQU73.jpg",
        title:"Site em andamento",
        value:"",
        bottom: "bottom"
      },
      {
        link:"",
        image:"",
        title:"",
        value:"",
        bottom: ""
      },
      {
        link:"",
        image:"" ,
        title:"",
        value:"",
        bottom: ""
      },
      {
        link:"",
        image:"",
        title:"",
        value:"",
        bottom: ""
      },
      {
        link:"",
        image:"",
        title:"",
        value:"",
        bottom: ""
      },
      {
        link:"",
        image:"",
        title:"",
        value:"",
        bottom: ""
      },
      {
        link:"",
        image:"",
        title:"",
        value:"",
        bottom:""
      },
      {
        link:"",
        image:"",
        title:"",
        value:"",
        bottom: ""
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
      margin: -70,
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
          items: 3
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
