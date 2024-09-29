import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FlexTableComponent } from './flex-table/flex-table.component';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, FlexTableComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class SharedTableComponent implements OnInit {
  @Input() tableKeys: string[] = [];
  @Input() tableData: { [key: string]: any }[] = [];
  @Input() hasPagination = true; // 控制是否顯示分頁
  @Input() allDataLoaded = true; // 後端返回所有資料，還是每頁回傳數據
  @Input() theme = 'flex';

  pageSize = 10; // 每頁顯示的資料數量
  pageIndex = 0; // 當前頁數
  totalRecords = 0; // 總資料數量
  displayedtableData: { [key: string]: any }[] = []; // 分頁顯示的資料

  constructor() {}

  ngOnInit() {
    if (this.allDataLoaded && this.hasPagination) {
      this.totalRecords = this.tableData.length;
      this.updateDisplayedData();
    } else if (!this.allDataLoaded) {
      this.totalRecords = 100;
    }
  }

  // 用於前端分頁的資料顯示更新
  updateDisplayedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedtableData = this.tableData.slice(start, end);
  }

  // 當使用者切換頁面時觸發此方法
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    if (this.allDataLoaded) {
      this.updateDisplayedData();
    } else {
      this.loadPageFromBackend();
    }
  }

  loadPageFromBackend() {
    // output commit event，先暫時寫這樣
    console.log(
      `從後端加載第 ${this.pageIndex + 1} 頁, 每頁 ${this.pageSize} 條記錄`
    );
  }
}
