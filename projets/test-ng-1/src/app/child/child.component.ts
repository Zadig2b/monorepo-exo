import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Ajouté

@Component({
  standalone: true,
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})

export class ChildComponent {
  hello = 'Hello';
  username: string = 'Alice';
  profilePictureUrl = 'assets/images/tiger.webp';

  updateUsername(newName: string) {
    this.username = newName;
  }
}
