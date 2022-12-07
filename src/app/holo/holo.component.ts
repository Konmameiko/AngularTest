/*
 * @Description: holo组件类
 * @Author: KonmaMeiko
 * @Date: 2022-11-23 20:55:24
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-holo',
  templateUrl: './holo.component.html',
  styleUrls: ['./holo.component.scss']
})
export class HoloComponent implements OnInit{

	public isShow :boolean = true;

    public name :string = `seven apples on a witch's tree`;

	public inputStr :string = '';

	public config :string = '';

    constructor() { }
    ngOnInit(): void {

    }

	setName() {
		this.name = 'With seven seeds to plant inside of me';
		this.isShow = !this.isShow;
	}
}
