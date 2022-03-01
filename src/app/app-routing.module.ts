import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TimetableComponent } from './timetable/timetable.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch:'full'},
      { path: 'home', component: HomeComponent,
       },
      { path: 'courses', component: CoursesComponent },
      { path: 'timetable', component: TimetableComponent,
      },
      { path: 'faculty', component: FacultyComponent,
      },
      { path: 'aboutus', component: AboutusComponent,
      },
      { path: 'contactus', component: ContactusComponent,
      },{ path: 'signup', component: SignupComponent,
    },
    { path: 'signin', component: SigninComponent,
      },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
