import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',

  templateUrl: './map.component.html',

  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild('map') mapRef: ElementRef = new ElementRef('');
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],

      zoom: 3,
    });

    L.rectangle(
      [
        [54.559322, -5.767822],
        [56.1210604, -3.02124],
      ],
      { color: '#ff7800', weight: 1 }
    ).addTo(this.map);

    L.marker([59.9386, 30.188478])
      .bindTooltip('Питер', {
        permanent: true,
        direction: 'top',
        offset: L.point(-14, -5),
      })
      .addTo(this.map);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,

        minZoom: 3,

        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    console.log(
      this.mapRef.nativeElement
        .querySelector('.leaflet-control-attribution')
        .remove()
    );
  }
}
