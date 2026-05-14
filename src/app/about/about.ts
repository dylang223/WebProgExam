import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
