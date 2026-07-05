import { Component } from '@angular/core';
import { LucideCodeXml, LucideMail, LucideMessageSquare, LucideUser } from '@lucide/angular';

@Component({
  selector: 'app-contact',
  imports: [LucideMail, LucideCodeXml, LucideUser, LucideMessageSquare],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  
}
