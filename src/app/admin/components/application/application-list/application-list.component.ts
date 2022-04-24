import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  data=[
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam mollitia vitae, accusamus excepturi est ipsa magnam eveniet libero amet expedita fugit dolorum rem ea, modi provident! Quo, porro aut?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam mollitia vitae, accusamus excepturi est ipsa magnam eveniet libero amet expedita fugit dolorum rem ea, modi provident! Quo, porro aut?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam mollitia vitae, accusamus excepturi est ipsa magnam eveniet libero amet expedita fugit dolorum rem ea, modi provident! Quo, porro aut?',
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
