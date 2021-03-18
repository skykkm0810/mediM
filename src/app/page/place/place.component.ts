import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MarketComponent} from '../market/market.component';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  place=[
    {title:'구역 A' , img:'../../../assets/image/place1.png', percentage:90, color:'#3EB3E7'},
    {title:'구역 B' , img:'../../../assets/image/place2.png', percentage:50, color:'#FF9446'},
    {title:'구역 C' , img:'../../../assets/image/place3.png', percentage:10, color:'#1FB88A'},
  ]
  title:any;
  url:any;
  remain:any;
  color:any;
  up(p:any){
    // var showBox = document.getElementsByClassName('show')[0] as HTMLElement;
    // var title = showBox.querySelector('.title') as HTMLElement;
    // var img = showBox.getElementsByTagName('img')[0] as HTMLElement;
    // var bar = showBox.querySelector('.gagebar') as HTMLElement;
    // var remain = showBox.querySelector('.show_remain') as HTMLElement;
    // var alarm = showBox.querySelector('.alarm') as HTMLElement;
    // title.textContent = p.title;
    this.title = p.title;
    this.url = p.img;
    this.remain = p.percentage;
    this.color = p.color
  }
  hide(){
    this.title ='';
  }
  marketOn(): void {
    const dialogRef = this.dialog.open(MarketComponent)
  }
}
