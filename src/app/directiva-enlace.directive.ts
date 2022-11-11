import { Directive, ElementRef, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[DirectivaEnlace]'
})
export class DirectivaEnlaceDirective {

  @HostBinding('class.cambiado') private isCambiado:boolean=false;
  private textoInicial!:string;

  constructor(private el:ElementRef) { 
    
  }

  @HostListener('mouseover') onMouseOver(){
    if (this.el.nativeElement.tagName==='A') {
      this.el.nativeElement.textContent=this.el.nativeElement.textContent.toUpperCase();
      this.isCambiado=true;
    }
    

  }

  @HostListener('mouseout') onMouseOut(){
    if (this.el.nativeElement.tagName==='A') {
      this.el.nativeElement.textContent = this.el.nativeElement.textContent.toLowerCase();
      this.isCambiado=false;
    }
  }
}
