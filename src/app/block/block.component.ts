import { Component, OnInit, Input} from '@angular/core';
//const SHA256 = require("crypto-js/sha256"); 
import sha256 from 'crypto-js/sha256';
import { timeout } from 'q';
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  hash:string;
  @Input('block') block:Block;

  constructor() { }

  ngOnInit() {
  }

  debug(block){
    return JSON.stringify(block,null, 2);
  }


}

export class Block{
  hash:string;
  constructor(private index:number, private timeStamp:Date, private data:any, private prevHash:string){
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.prevHash = prevHash;
    this.calculateHash();
  }

  calculateHash() 
  { 
    debugger;
     this.hash = sha256(this.index + this.prevHash + this.timeStamp + JSON.stringify(this.data)).toString();
    return  this.hash;
  } 
}

