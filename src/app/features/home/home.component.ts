import {Component, OnInit} from '@angular/core';
import {PostmateService} from "../../postmate.service";
import {DefaultView} from "../../views-funnel/default";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(private postMate: PostmateService,private funnelView: DefaultView) {
}
ngOnInit() {
  this.postMate.emitCode(this.funnelView.getPreview(),'',{page:'default'})
}
}
