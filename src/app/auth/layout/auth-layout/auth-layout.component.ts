import { MessageComponent } from './../message/message.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, MessageComponent], 
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
