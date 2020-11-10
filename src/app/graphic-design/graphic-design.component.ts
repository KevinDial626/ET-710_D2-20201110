import { Component, OnInit } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {
  portfolioItems ;
  _albums = [] ;
  constructor(
    private cartService: CartService,
    private _lightbox: Lightbox,
  ) {
 for (let i = 1; i <= 4; i++) {
      const src = 'demo/img/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'demo/img/image' + i + '-thumb.jpg';
      const album = {
         src: 'https://d3u4fnct1vpepk.cloudfront.net/website/war2/img/Visionaire.jpg',
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }

   }

  ngOnInit() {
    this.portfolioItems = this.cartService.getPortfolio();

  }

  open(index: number): void {
    // open lightbox

    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}