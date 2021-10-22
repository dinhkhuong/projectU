import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListSingleComponent } from './project-list-single.component';

describe('ProjectListSingleComponent', () => {
  let component: ProjectListSingleComponent;
  let fixture: ComponentFixture<ProjectListSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
