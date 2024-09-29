import { IVoiceBase } from './base';

export interface IVoiceGroup {
  id: number;
  name: string;
  base: IVoiceBase[];
}

export const VoiceGroupByTTSMock: IVoiceGroup[] = [
  {
    id: 1,
    name: 'TTS-G01',
    base: [
      {
        id: 1,
        originText: 'AA',
        targetText: 'BB',
      },
      {
        id: 3,
        originText: 'VV',
        targetText: 'PP',
      },
    ],
  },
  {
    id: 2,
    name: 'TTS-G01',
    base: [
      {
        id: 2,
        originText: 'CC',
        targetText: 'DD',
      },
      {
        id: 4,
        originText: 'EE',
        targetText: 'FF',
      },
    ],
  },
  {
    id: 3,
    name: 'TTS-G01',
    base: [
      {
        id: 2,
        originText: 'CC',
        targetText: 'DD',
      },
      {
        id: 3,
        originText: 'VV',
        targetText: 'PP',
      },
    ],
  },
];

export const VoiceGroupBySTTMock: IVoiceGroup[] = [
  {
    id: 1,
    name: 'STT-G01',
    base: [
      {
        id: 1,
        originText: 'PP',
        targetText: 'BB',
      },
      {
        id: 3,
        originText: 'RR',
        targetText: 'PP',
      },
    ],
  },
  {
    id: 2,
    name: 'STT-G01',
    base: [
      {
        id: 2,
        originText: 'QQ',
        targetText: 'DD',
      },
      {
        id: 4,
        originText: 'YY',
        targetText: 'FF',
      },
    ],
  },
  {
    id: 3,
    name: 'STT-G01',
    base: [
      {
        id: 2,
        originText: 'QQ',
        targetText: 'DD',
      },
      {
        id: 3,
        originText: 'RR',
        targetText: 'PP',
      },
    ],
  },
];
