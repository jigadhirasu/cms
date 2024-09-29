import { Component } from '@angular/core';
import {
  IVoiceBase,
  VoiceBaseBySTTMock,
  VoiceBaseByTTSMock,
} from '../../model/base';
import { ActivatedRoute } from '@angular/router';
import { SharedTableComponent } from '../../../../shared/table/table.component';

@Component({
  selector: 'app-voice-list',
  standalone: true,
  imports: [SharedTableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class VoiceListComponent {
  VoiceBaseByTTSMock = VoiceBaseByTTSMock;
  VoiceBaseBySTTMock = VoiceBaseBySTTMock;
  origin!: string;
  datas: IVoiceBase[] = [];
  tableKeys = ['id', 'originText', 'targetText', 'Action'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.parent) {
      this.route.parent.url.subscribe((urlSegment) => {
        this.origin = urlSegment[0]?.path ?? '';
        this.setDatas();
      });
    }
  }

  setDatas() {
    // api response
    if (!this.origin) return;
    switch (this.origin) {
      case 'tts':
        this.datas = this.VoiceBaseByTTSMock;
        break;
      case 'stt':
        this.datas = this.VoiceBaseBySTTMock;
        break;
    }
  }
}
