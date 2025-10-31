import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './demos/home-demo-one/home-demo-one.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { WorkDetailsComponent } from './pages/work-details/work-details.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ToursComponent } from './pages/tours/tours.component';
import { EventsComponent } from './pages/events/events.component';
import { GettingHereComponent } from './pages/getting-here/getting-here.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeDemoOneComponent },
    { path: 'service-details', component: ServiceDetailsComponent },
    { path: 'work-details', component: WorkDetailsComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    // Here add new pages component
    { path: 'about-us', component: AboutUsComponent},
    { path: 'tours', component:ToursComponent},
    { path: 'events', component:EventsComponent},
    { path: 'getting-here', component: GettingHereComponent},

    { path: '**', component: ErrorPageComponent }, // This line will remain down from the whole pages component list
];
