import { TestBed } from '@angular/core/testing';

import { Ng2TimeagoFrPipeService } from './ng2-timeago-fr-pipe.service';

describe('Ng2TimeagoFrPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2TimeagoFrPipeService = TestBed.get(Ng2TimeagoFrPipeService);
    expect(service).toBeTruthy();
  });
});
