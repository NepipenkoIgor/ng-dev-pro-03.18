import { TestBed, inject } from '@angular/core/testing';

import { PreloadingService } from './preloading.service';

describe('PreloadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadingService]
    });
  });

  it('should be created', inject([PreloadingService], (service: PreloadingService) => {
    expect(service).toBeTruthy();
  }));
});
