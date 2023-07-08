import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrewListPage } from './crew-list.page';

describe('CrewListPage', () => {
  let component: CrewListPage;
  let fixture: ComponentFixture<CrewListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrewListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
