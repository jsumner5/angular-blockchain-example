import { Component, OnInit } from '@angular/core';
import { BlockComponent, Block } from '../block/block.component';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.css'],

})
export class BlockChainComponent implements OnInit {

  chain:any[]=[];

  constructor() {
    this.chain = [this.getGenesisBlock()];
   }

  ngOnInit() {
  }

  getGenesisBlock() {
    let block = new Block(this.chain.length,new Date(), "Genesis Block", "Origin Block"); 
    console.log(block);
    return block;
} 


getLatestBlock() 
{ 
return this.chain[this.chain.length - 1]; 
} 

addBlock() { 
  let newBlock = new Block(this.chain.length,new Date(), "BLOCK DATA", this.getLatestBlock().hash); 
  newBlock.hash = newBlock.calculateHash(); 
  this.chain.push(newBlock); 
  } 
    
  isChainValid() 
  { 
  for (let i = 1; i < this.chain.length; i++)
  { 
    const currentBlock = this.chain[i]; 
    const previousBlock = this.chain[i - 1]; 
    if (currentBlock.hash !== currentBlock.calculateHash()) { 
    return false; 
  } 
  
  if (currentBlock.previousHash !== previousBlock.hash) 
  
  { 
  return false; 
  } 
  } 
  return true; 
  } 
}
