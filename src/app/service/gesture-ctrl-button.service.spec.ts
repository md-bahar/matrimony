import { TestBed } from '@angular/core/testing';

import { GestureCtrlButtonService } from './gesture-ctrl-button.service';

describe('GestureCtrlButtonService', () => {
  let service: GestureCtrlButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestureCtrlButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
