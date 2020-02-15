import { TestBed } from '@angular/core/testing';

import { AnimeResolverService } from './anime-resolver.service';

describe('AnimeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeResolverService = TestBed.get(AnimeResolverService);
    expect(service).toBeTruthy();
  });
});
