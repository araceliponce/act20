import { Component } from '@angular/core';
import { ActinterceptorService } from 'src/app/services/actinterceptor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private postsService:ActinterceptorService){}

  postsLi = new Array(); // () muy importante

  ngOnInit(){
    //suscribimos la instancia postsservice al metodo de get all posts
    this.postsService.getPostsAllInterceptor().subscribe({
      next: (response:any)=> {
        this.postsLi=response.body;
        console.log(response);
      },
      error:(error)=>console.error(error),
      complete:()=> console.info('completed!')
    })
  }

}
