import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public flag: boolean = false;
  public list: any[] = [
    {
      title: '我是新闻1',
    },
    {
      title: '我是新闻2',
    },
    {
      title: '我是新闻3',
    },
  ];
  public orderStatus: number = 3; /* 1表示已经支付   2支付并且确认订单   3、表示已经发货   4表示已经收货   其他、无效*/
  public attr: string = 'orange';
  public today: any = new Date();
  public keywords:string=''
  constructor() {}

  ngOnInit(): void {}
  run(e: any) {
    console.log(this.list);

    console.log(e);
  }
  keyDown(e: any) {
    if (e.keyCode == 13) {
      console.log('按了一下回车');
    } else {
      //e.target 获取dom对象
      console.log(e.target.value);
    }
  }
  keyUp(e: any) {
    if (e.keyCode == 13) {
      console.log(e.target.value);
      console.log('按了一下回车');
    }
  }
  changeKeywords(){
    this.keywords='我是改变后的值'
  }
  getKeywords(){
    alert(this.keywords)
  }
}
