import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(private router: Router){}

  image:any = "../../assets/blog/1.png"
  image1:any = "../../assets/blog/2.png"
  image2:any = "../../assets/blog/3.png"
  image3:any = "../../assets/blog/4.png"
  image4:any = "../../assets/detalisdeveloper/Frame.png"
  navigateToAbout() {
    this.router.navigate(['/blogDetalis']);
  }
}
