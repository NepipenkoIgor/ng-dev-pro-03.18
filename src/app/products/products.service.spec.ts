import {inject, TestBed} from '@angular/core/testing';
import {ProductsService} from './products.service';
import {environment} from '../../environments/environment';
import {BASE_URL} from '../config';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('products service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductsService,
        {provide: BASE_URL, useValue: environment.baseUrl},
      ]
    });
  });
  it('test', inject([ProductsService, HttpTestingController],
    (_productsService: ProductsService, _backend: HttpTestingController) => {

      _productsService.getUsers().subscribe((products) => {
        expect(Array.isArray(products)).toBeTruthy();
        expect(products.length).toEqual(0);
      });

      _backend.expectOne({
        method: 'GET',
        url: `${environment.baseUrl}/products`
      }).error(new ErrorEvent(''));
    }));
});
