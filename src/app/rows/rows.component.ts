import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {
  userForm :FormGroup ;
  listData:any;

  constructor(private fb :FormBuilder ){ 
    this.listData=[];
    this.userForm = this.fb.group({
     name:['',Validators.required],
     address:['',Validators.required],
     contactNo:['',Validators.required],
     gender:['',Validators.required]
    })
  }
    public addItem():void{
      this.listData.push(this.userForm.value)
      this.userForm.reset();
    }

  

  ngOnInit(): void {
  }

}
