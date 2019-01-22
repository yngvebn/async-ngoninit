import { TestBed } from '@angular/core/testing';

import { MyAsyncService } from './my-async.service';

describe('MyAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAsyncService = TestBed.get(MyAsyncService);
    expect(service).toBeTruthy();
  });
});
