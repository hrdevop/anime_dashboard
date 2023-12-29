import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { IAnime, IPagination } from './dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private _dashboardService: DashboardService) {
  }
  private searchValue: Subject<string> = new Subject<string>
  private pagination: IPagination = {
    currentPage: 1,
    limit: 15,
    searchValue: '',
  }
  totalData: number = 0
  animeData!: IAnime[]
  ngOnInit() {
    this.getAnimeData()
    this.searchValue.pipe(debounceTime(300)).subscribe(searchValue => {
      this.pagination.searchValue = searchValue
      this.getAnimeData()
    })
  }

  onChangePage(type: 'next' | 'prev') {
    if (type === 'prev') {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--
        this.getAnimeData()
      }
    } else {
      this.pagination.currentPage++
      this.getAnimeData()
    }
  }

  onSearchAnime(event: Event) {
    const searchedValue = (event.target as HTMLInputElement)?.value;
    if (searchedValue !== undefined) {
      this.searchValue.next(searchedValue);
    }
  }

  private animeDataSubscription!: Subscription;
  private getAnimeData() {
    this.animeDataSubscription = this._dashboardService.getData$(this.pagination).subscribe(res => {
      this.animeData = res.data;
      this.totalData = res.pagination.items.total;
    });
  }


  viewAnimePage(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy() {
    if (this.animeDataSubscription) {
      this.animeDataSubscription.unsubscribe();
    }
  }
}
