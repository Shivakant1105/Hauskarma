import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDeatilsTwoComponent } from './blog-deatils-two.component';

describe('BlogDeatilsTwoComponent', () => {
  let component: BlogDeatilsTwoComponent;
  let fixture: ComponentFixture<BlogDeatilsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDeatilsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDeatilsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
