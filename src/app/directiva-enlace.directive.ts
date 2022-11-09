import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[DirectivaEnlace]'
})
export class DirectivaEnlaceDirective {

  private textoInicial!:string;

  constructor(private el:ElementRef) { 
    
  }

  @HostListener('mouseover') onMouseOver(){
    
    this.el.nativeElement.textContent=this.el.nativeElement.textContent.toUpperCase();
    this.el.nativeElement.id="cambiado";

  }

  @HostListener('mouseout') onMouseOut(){
    this.el.nativeElement.textContent = this.el.nativeElement.textContent.toLowerCase();
    this.el.nativeElement.id=""
  }
}
