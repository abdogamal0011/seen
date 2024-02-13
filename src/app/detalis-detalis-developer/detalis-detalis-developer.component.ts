import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalis-detalis-developer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalis-detalis-developer.component.html',
  styleUrl: './detalis-detalis-developer.component.css'
})
export class DetalisDetalisDeveloperComponent {
  constructor(private router:Router){}
image:any= "../../assets/detalisDetalisDeveloper/Group.png"
image4:any = "../../assets/detalisdeveloper/Frame.png"
image5:any = "../../assets/detalisDetalisDeveloper/Image.png"
image6:any = "../../assets/detalisDetalisDeveloper/favorite.png"
image7:any = "../../assets/detalisDetalisDeveloper/5.png"
image8:any = "../../assets/detalisDetalisDeveloper/3.png"
image9:any = "../../assets/detalisDetalisDeveloper/4.png"

navigateToAbout() {
  this.router.navigate(['/developer']);
}
}
