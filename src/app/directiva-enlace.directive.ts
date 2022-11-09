import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[DirectivaEnlace]'
})
export class DirectivaEnlaceDirective {

  private textoInicial!:string;

  constructor(private el:ElementRef) { 
    
  }

  @HostListener('mouseover') onMouseOver(){
    
    this.el.nativeElement.textContent="Texto cambiado";
    this.el.nativeElement.id="cambiado";

  }

  @HostListener('mouseout') onMouseOut(){
    this.el.nativeElement.textContent = "Otro texto salir";
    this.el.nativeElement.id=""
  }
}
