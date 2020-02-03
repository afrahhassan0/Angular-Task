import { TestBed } from '@angular/core/testing';

import { AnimeApiService } from './anime-api.service';

describe('AnimeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeApiService = TestBed.get(AnimeApiService);
    expect(service).toBeTruthy();
  });
});
