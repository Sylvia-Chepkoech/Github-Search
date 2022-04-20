import { Component, OnInit } from '@angular/core';
import { GitprofileService } from '../gitprofile-service/gitprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public myUser:any=[];
  public repos:any=[];
  public username: string = "";

    //inject service
  constructor(private gitprofileService:GitprofileService) { 
    
    
  } 
  findUser(){
    this.gitprofileService.updateUser(this.username);
    this.gitprofileService.getUserInfo().subscribe((response: any) =>{
      this.myUser = response;
      console.log(response);
    });
    this.gitprofileService.getUserRepo().subscribe((myRepo: any) =>{
      this.repos = myRepo;
      console.log(myRepo);
    });
  }
  ngOnInit(): void{
    
  }

}
