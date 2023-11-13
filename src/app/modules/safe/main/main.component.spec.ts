import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { CoursesModule } from '../components/courses/courses.module';
import { UsersModule } from '../components/users/users.module';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        HttpClientModule,
        ToolbarModule,
        SidenavModule,
        UsersModule,
        CoursesModule,
        RouterModule,
        BrowserAnimationsModule
      ],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
