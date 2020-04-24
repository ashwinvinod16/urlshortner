import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { UrlserviceService } from '../urlservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlform;
  isvalid=false;
  short;
  id
  constructor(private servceobj:UrlserviceService,private activateroute: ActivatedRoute) { 
    this.id=this.activateroute.snapshot.params.id
    if(this.id!=undefined){
    this.servceobj.redirecturl(this.id).subscribe((data)=>{
      window.location.href=data.urlName;
    })
    }
    this.urlform=new FormGroup({
      'urlName':new FormControl('',Validators.required)
   })
 }

  ngOnInit(): void {
  }
 
  sendata(){
    if(this.urlform.valid){
      this.servceobj.posturl(this.urlform.value).subscribe((data)=>{
        this.isvalid=true;
        this.short=data.ops[0].shorturl;
      })
    }

  }
}
