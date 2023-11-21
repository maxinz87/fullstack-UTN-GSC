import { TestBed } from '@angular/core/testing';

import { BackendConexionService } from './backend-conexion.service';

describe('BackendConexionService', () => {
  let service: BackendConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
