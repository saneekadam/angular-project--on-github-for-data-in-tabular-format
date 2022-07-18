import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.css']
})
export class ApicompComponent implements OnInit {


  data:any=[];
  constructor(private user:UserService) { 
    this.user.getdata().subscribe((data) => {
      console.warn(data);
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
