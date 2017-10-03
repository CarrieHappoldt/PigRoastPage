import { Component, Input} from '@angular/core';

import { Guest } from '../shared/guest.model';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})

export class GuestListComponent {
  @Input() guests: Guest[];
}
