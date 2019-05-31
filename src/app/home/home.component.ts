import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list 
  constructor(private KeyProvider: KeyService) {
    this.KeyProvider.getNews().subscribe((data)=>
    {console.log(data)
    this.list=data})
   }

  ngOnInit() {
  }

}
