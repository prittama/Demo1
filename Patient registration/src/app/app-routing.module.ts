import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';
import { NocompComponent } from './nocomp/nocomp.component';
import { SampleReviewComponent } from './sample-review/sample-review.component';
import { TestUpdateComponent } from './test-update/test-update.component';
import { TestDeleteComponent } from './test-delete/test-delete.component';
import { TestGetComponent } from './test-get/test-get.component';
import { SampleGetComponent } from './sample-get/sample-get.component';
import { SampleDetailsComponent } from './sample-details/sample-details.component';
import { TestDetailsComponent } from './test-details/test-details.component';

const routes: Routes = [
  { path: '', component:SampleComponent},
  { path: 'sample', component: SampleComponent},
  { path: 'sampleReview', component: SampleReviewComponent },
  { path: 'SampleGet', component: SampleGetComponent },
  { path: 'SampleDetails', component: SampleDetailsComponent },
  { path: 'test', component: TestComponent },
  { path: 'testDetails', component: TestDetailsComponent },
  { path: 'testUpdate', component: TestUpdateComponent },
  { path: 'testDelete', component: TestDeleteComponent },
  { path: 'testGet', component: TestGetComponent },
  { path: '**', component: NocompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutes = [
    SampleComponent
  , TestComponent
  , NocompComponent
  , SampleReviewComponent
  , TestUpdateComponent
  , TestDeleteComponent
  , TestGetComponent
  , SampleGetComponent
  , TestDetailsComponent
  , SampleDetailsComponent
]