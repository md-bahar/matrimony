import { TestBed } from '@angular/core/testing';

import { GestureCtrlService } from './gesture-ctrl.service';

describe('GestureCtrlService', () => {
  let service: GestureCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestureCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
