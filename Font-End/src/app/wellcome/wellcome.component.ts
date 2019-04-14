import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {
name=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
  }

}
