
/**Effects*/
// describe('My Effects', () => {
//   let actions: Observable<any>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       providers: [
//         ProductsEffects,
//         provideMockActions(() => actions),
//         {
//           provide: ProductsService, useValue: {getUsers: () => of([1, 2, 3])}
//         }, {provide: BASE_URL, useValue: environment.baseUrl},
//       ],
//     });
//   });
//
//   it('should work', inject([ProductsEffects], (effects: ProductsEffects) => {
//     const action = new ProductActions.GetProductsPending();
//     const completion = new ProductActions.GetProductsSuccess([1, 2, 3]);
//
//     actions = hot('--a-', {a: action});
//
//     const expected = cold('--b', {b: completion});
//
//     expect(effects.products$).toBeObservable(expected);
//
//
//   }));
// });


/**Tooltip directive*/

// @Component({
//   selector: 'test-wrapper',
//   template: `
//     <div>
//       <div class="control" (mouseenter)="t.show()" (mouseleave)="t.hide()">
//       </div>
//       <div [appTooltip]="tooltipText" #t="tooltip" style="display: none"></div>
//     </div>`,
// })
// class TestWrapperComponent {
//
// }
//
// describe('Search component', () => {
//   let fixture;
//   let debugElement;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         TooltipDirective,
//         TestWrapperComponent
//       ],
//     }).compileComponents();
//     fixture = TestBed.createComponent(TestWrapperComponent);
//     debugElement = fixture.debugElement;
//   }));
//   it(`should show correct placeholder`, async(() => {
//     const component = fixture.componentInstance;
//     const tooltipText = 'Test text';
//     component.tooltipText = tooltipText;
//     fixture.detectChanges();
//     const div = debugElement.query(By.css('div.control'));
//     const divElement = div.nativeElement;
//     expect(document.querySelector('.tooltip.tooltip-active')).toBeFalsy();
//     divElement.dispatchEvent(new Event('mouseenter'));
//     expect(document.querySelector('.tooltip.tooltip-active')).toBeTruthy();
//     divElement.dispatchEvent(new Event('mouseleave'));
//     expect(document.querySelector('.tooltip.tooltip-active')).toBeFalsy();
//   }));
// });

/**Product pipe */

// const products = [{title: 'Nokia'}, {title: 'Samsung'}, {title: 'iPhone'}];
//
// @Component({
//   selector: 'test-wrapper',
//   template: '<div *ngFor="let product of products | productFilter:text"></div>'
// })
// class TestWrapperComponent {
//
// }
//
// describe('Search component', () => {
//   let fixture;
//   let debugElement;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         TestWrapperComponent,
//         ProductFilterPipe
//       ],
//     }).compileComponents();
//     fixture = TestBed.createComponent(TestWrapperComponent);
//     debugElement = fixture.debugElement;
//   }));
//   it(`should show correct placeholder`, async(() => {
//     const component = fixture.componentInstance;
//     component.products = products;
//     component.text = '';
//     fixture.detectChanges();
//     let divs = debugElement.queryAll(By.css('div'));
//     expect(divs.length).toBe(3);
//     component.text = 'Nok';
//     fixture.detectChanges();
//     divs = debugElement.queryAll(By.css('div'));
//     expect(divs.length).toBe(1);
//   }));
// });

/**cart selector*/

// describe('My Selectors', () => {
//
//   const products = [{price: 2}, {price: 3}];
//   const user = {bonuses: 2};
//
//   it('should calc selectTotal', () => {
//     expect(cartProductsWithBonuses.projector(products, {})).toEqual(products);
//     expect(cartProductsWithBonuses.projector(products, user)).toEqual(products.map(product => ({
//       ...product,
//       price: product.price * user.bonuses
//     })));
//   });
// });


/**Products service*/

// describe(`FakeHttpClientResponses`, () => {
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientModule,
//         HttpClientTestingModule
//       ],
//       providers: [
//         ProductsService,
//         {provide: BASE_URL, useValue: environment.baseUrl},
//       ]
//     });
//   });
//
//   it(`should issue a request`,
//     inject([ProductsService, HttpTestingController], (productsService: ProductsService, backend: HttpTestingController) => {
//       productsService.getUsers().subscribe((data) => {
//         expect(Array.isArray(data)).toBeTruthy();
//         expect(data.length).toBe(0);
//       });
//       backend.expectOne({
//         url: `${environment.baseUrl}/products`,
//         method: 'GET'
//       }).error(new ErrorEvent(''));
//     })
//   );
//
//   it(`should issue a request`,
//     inject([ProductsService, HttpTestingController], (productsService: ProductsService, backend: HttpTestingController) => {
//       productsService.getUsers().subscribe((data) => {
//         expect(Array.isArray(data)).toBeTruthy();
//         expect(data.length).toBe(3);
//       });
//       backend.expectOne({
//         url: `${environment.baseUrl}/products`,
//         method: 'GET'
//       }).flush({data: [1, 2, 3]});
//     })
//   );
//
// });

/**Search component*/
// class MockSearchService {
//   public set search(value: string) {
//   }
// }
//
//
// describe('Search component', () => {
//   let fixture;
//   let debugElement;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         SearchComponent
//       ],
//       imports: [MatInputModule, MatToolbarModule, NoopAnimationsModule],
//       providers: [
//         {provide: SearchService, useClass: MockSearchService}
//       ]
//     }).compileComponents();
//     fixture = TestBed.createComponent(SearchComponent);
//     debugElement = fixture.debugElement;
//
//   }));
//   it('should search by input value', async(inject([SearchService], (_searchService) => {
//     const spiez = spyOnProperty(_searchService, 'search', 'set');
//     const input = debugElement.query(By.css('input'));
//     const inputElement = input.nativeElement;
//     inputElement.value = 'test value';
//     inputElement.dispatchEvent(new Event('input'));
//     expect(spiez).toHaveBeenCalledWith(inputElement.value);
//   })));
//   it(`should show correct placeholder`, async(() => {
//     const placeholder = 'test text';
//     const component = fixture.componentInstance;
//     component.placeholder = placeholder;
//     component.input = 'test input';
//     fixture.detectChanges();
//
//     const input = debugElement.query(By.css('input'));
//     const inputElement = input.nativeElement;
//     expect(inputElement.getAttribute('placeholder')).toBe(placeholder);
//   }));
// });



// browsers: ['ChromeNoSandbox'],
//   customLaunchers: {
//   ChromeNoSandbox: {
//     base: 'ChromeHeadless',
//       flags: [
//       '--headless',
//       '--disable-gpu',
//       '--no-sandbox',
//       '--no-default-browser-check',
//       '--no-first-run',
//       '--disable-default-apps'
//     ]
//   }
// },
