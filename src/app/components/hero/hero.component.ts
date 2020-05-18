import { Component, OnInit, Input, Inject } from '@angular/core';
import { faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  faStar = faStar;
  faChevronDown = faChevronDown;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {}

}
