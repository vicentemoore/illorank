import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-concursante',
  templateUrl: './concursante.component.html',
  styleUrls: ['./concursante.component.scss']
})

export class ConcursanteComponent {
  @Input() imagen: string = "";
  @Input() titulo: string = "";
  @Input() spanText: string = "";
  @Input() comodines: string = "";
  @Input() link: string = "";
  @Input() winner: boolean = false;
  @Input() large: boolean = false;
  @Input() cagao: boolean = false;
  @Input() joan: boolean = false;

    get enlace(): string {
      return this.link;
    }
  
    @HostListener('click') onBodyClick() {
      if (this.enlace) {
        window.open(this.enlace, '_blank');
      }
    }
}