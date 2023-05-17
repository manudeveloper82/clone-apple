import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
 tituloblack: string = "As novidades"
 titulogray: string = "Veja o que acabou de chegar."


 @Input()
 Photo:string=""
 @Input()
 TituloBlackc:string=""
 @Input()
 TituloGray:string=""
 @Input()
 Description:string=""
 @Input()
 Produto:string=""
 @Input()
 Valor:string=""
 @Input()
 Link:string=""
}
