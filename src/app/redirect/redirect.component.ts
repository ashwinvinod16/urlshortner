import { Component, OnInit } from '@angular/core';
import { UrlserviceService } from '../urlservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  
  id
  constructor(private servceobj:UrlserviceService,private activateroute: ActivatedRoute) { 
    this.id=this.activateroute.snapshot.params.id
    console.log(this.id);
    if(this.id!=undefined){
    this.servceobj.redirecturl(this.id).subscribe((data)=>{
      window.location.href=data.urlName;
    })
    }
  }

  ngOnInit(): void {
  }

}
