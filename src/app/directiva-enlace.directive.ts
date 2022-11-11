import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[DirectivaEnlace]'
})
export class DirectivaEnlaceDirective {

  @HostBinding('class.cambiado') private isCambiado:boolean=false;

  @Input() config = {
    textoCambiado:'',
    color:''
  }

  private textoInicial:String="";
  constructor(private el:ElementRef) { 
    
  }

  @HostListener('mouseover') onMouseOver(){
    this.textoInicial = this.el.nativeElement.textContent;
    if (this.el.nativeElement.tagName==='A') {
      this.el.nativeElement.textContent = this.config.textoCambiado;
      this.isCambiado=true;
      this.el.nativeElement.style.borderColor=this.config.color;
    }
    

  }

  @HostListener('mouseout') onMouseOut(){
    if (this.el.nativeElement.tagName==='A') {
      this.el.nativeElement.textContent = this.textoInicial;
      this.isCambiado=false;
    }
  }
}
