import {async, inject, TestBed} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {SearchService} from '../common/services/search.service';
import {By} from '@angular/platform-browser';
import {MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

class MockSearchService {
  public set search(value: string) {
  }
}

describe('Search component', () => {
  let fixture;
  let debugElement;
  let component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [MatInputModule, NoopAnimationsModule],
      providers: [{provide: SearchService, useClass: MockSearchService}]
    }).compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('search', async(inject([SearchService],
    (_searchService: SearchService) => {
      const text = 'nokia';
      const spy = spyOnProperty(_searchService, 'search', 'set');
      const debugInputElement = debugElement.query(By.css('input'));
      const inputElement = debugInputElement.nativeElement;
      inputElement.value = text;
      inputElement.dispatchEvent(new Event('input'));
      expect(spy).toHaveBeenCalledWith(text);
    })));

  it('search', async(() => {
    const placeholder = 'search term';
    component.placeholder = placeholder;
    fixture.detectChanges();
    const debugInputElement = debugElement.query(By.css('input'));
    const inputElement = debugInputElement.nativeElement;
    expect(inputElement.getAttribute('placeholder')).toEqual(placeholder);
  }));
});

