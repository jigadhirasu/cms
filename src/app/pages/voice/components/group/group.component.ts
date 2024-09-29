import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IVoiceGroup,
  VoiceGroupBySTTMock,
  VoiceGroupByTTSMock,
} from '../../model/group';
import { SharedTableComponent } from '../../../../shared/table/table.component';

@Component({
  selector: 'app-voice-group',
  standalone: true,
  imports: [SharedTableComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
})
export class VoiceGroupComponent implements OnInit {
  VoiceGroupByTTSMock = VoiceGroupByTTSMock;
  VoiceGroupBySTTMock = VoiceGroupBySTTMock;
  origin!: string;
  datas: IVoiceGroup[] = [];
  tableKeys = ['id', 'name', 'Action'];

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
        this.datas = this.VoiceGroupByTTSMock;
        break;
      case 'stt':
        this.datas = this.VoiceGroupBySTTMock;
        break;
    }
  }
}
