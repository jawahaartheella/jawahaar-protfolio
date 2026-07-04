import { Component } from '@angular/core';
import { LucideCodeXml, LucideMail, LucideUser } from '@lucide/angular';

@Component({
  selector: 'footer',
  imports: [LucideCodeXml, LucideUser, LucideMail],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

}
