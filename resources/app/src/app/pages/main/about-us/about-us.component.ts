import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent, HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideShieldCheck, lucideUser, lucideClock } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { SharedModule } from '../../../shared.module';
import { HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective } from '@spartan-ng/ui-tabs-helm';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js';
import {Circle} from 'ol/geom';
import {Feature} from 'ol';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';
import {Style, Fill, Stroke} from 'ol/style';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmButtonDirective,
    HlmIconModule,
    SharedModule
  ],
  providers: [
    provideIcons({
      lucideShieldCheck,
      lucideUser,
      lucideClock
    })
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutUsComponent implements OnInit {
  private readonly mapId = 'ol-map';
  private readonly mapZoom = 9.5;
  private readonly mapCenter = [6.860654, 53.138857];
  private readonly mapRadius = 42 * 1000;
  private map!: Map;

  public currentTab = signal('features');
  public readonly tabs = [
    {
      label: 'features',
      content: {
        title: 'ABOUT_US.CAR.TABS.FEATURES.TITLE',
        description: 'ABOUT_US.CAR.TABS.FEATURES.DESCRIPTION',
        list: 'ABOUT_US.CAR.TABS.FEATURES.LIST'
      }
    },
    {
      label: 'comfort',
      content: {
        title: 'ABOUT_US.CAR.TABS.COMFORT.TITLE',
        description: 'ABOUT_US.CAR.TABS.COMFORT.DESCRIPTION',
        list: 'ABOUT_US.CAR.TABS.COMFORT.LIST'
      }
    },
    {
      label: 'safety',
      content: {
        title: 'ABOUT_US.CAR.TABS.SAFETY.TITLE',
        description: 'ABOUT_US.CAR.TABS.SAFETY.DESCRIPTION',
        list: 'ABOUT_US.CAR.TABS.SAFETY.LIST'
      }
    }
  ];

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const latLong = this.mapCenter;
    const latLongWebmercator = fromLonLat(latLong);

    const circleFeature = new Feature({
      geometry: new Circle(latLongWebmercator, this.mapRadius)
    });

    const circleStyle = new Style({
      fill: new Fill({
        color: 'rgba(255, 0, 0, 0.2)'
      }),
      stroke: new Stroke({
        color: 'red',
        width: 2
      })
    });

    circleFeature.setStyle(circleStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [circleFeature]
      })
    });

    this.map = new Map({
      controls: [],
      target: this.mapId,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: latLongWebmercator,
        zoom: this.mapZoom
      })
    });
  }
}
