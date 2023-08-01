import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDeatilsComponent } from './blog-deatils.component';

describe('BlogDeatilsComponent', () => {
  let component: BlogDeatilsComponent;
  let fixture: ComponentFixture<BlogDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
