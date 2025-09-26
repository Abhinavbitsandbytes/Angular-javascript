import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ParentComponent } from './Component-communication/part1/parent/parent.component';
import { ChildComponent } from './Component-communication/part1/child/child.component';
import { Parent2Component } from './Component-communication/part2/parent/parent2.component';
import { Child2Component } from './Component-communication/part2/child/child2.component';
import { Parent3Component } from './Component-communication/part3/parent3/parent3.component';
import { Child3Component } from './Component-communication/part3/child3/child3.component';
import { DirComponentComponent } from './directive/dir-component/dir-component.component';
import { MydirectiveDirective } from './mydirective.directive';
import { FilterPipeCompComponent } from './pipes/filter-pipe-comp/filter-pipe-comp.component';
import { FilterPipe } from './filter.pipe';
import { ImpurePipeCompComponent } from './pipes/impure-pipe-comp/impure-pipe-comp.component';
import { FormCompComponent } from './form/form-comp/form-comp.component';
import { ConcatMapComponent } from './Rxjs/concat-map/concat-map.component';
import { ForkJoinComponent } from './Rxjs/fork-join/fork-join.component';
import { TempComponent } from './temp/temp.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { Subject2Component } from './subject/subject2/subject2.component';
import { GridComponent } from './grid/grid.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { TypeaheadComponent } from './z-machine-coding/typeahead/typeahead.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { SiblingOneComponent } from './Component-communication/part4/sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './Component-communication/part4/sibling-two/sibling-two.component';
import { Parent4Component } from './Component-communication/part4/parent4/parent4.component';
import { ObservableComponent } from './Observable-Subject/observable/observable.component';
import { Observable2Component } from './Observable-Subject/observable2/observable2.component';
import { NestedFolderParentComponent } from './z-machine-coding/nested-folder/nested-folder-parent/nested-folder-parent.component';
import { FolderTreeComponent } from './z-machine-coding/nested-folder/folder-tree/folder-tree.component';
import { GameBoardComponent } from './z-machine-coding/tic-tac-toe/game-board/game-board.component';
import { Wh1Component } from './z-machine-coding/white-label/wh1/wh1.component';
import { Wh2Component } from './z-machine-coding/white-label/wh2/wh2.component';
import { CarouselComponent } from './z-machine-coding/carousel/carousel/carousel.component';
import { CarouselParentComponent } from './z-machine-coding/carousel/carousel-parent/carousel-parent.component';
import { StarRatingComponent } from './z-machine-coding/star-rating/star-rating.component';
import { ProgressBarComponent } from './z-machine-coding/progress-bar/progress-bar.component';
import { DarkThemeComponent } from './z-machine-coding/dark-theme/dark-theme.component';
import { ParentPaginationComponent } from './z-machine-coding/pagination/parent-pagination/parent-pagination.component';
import { PaginationComponent } from './z-machine-coding/pagination/pagination/pagination.component';
import { CdParentComponent } from './change-detection/cd-parent/cd-parent.component';
import { CdChildComponent } from './change-detection/cd-child/cd-child.component';
import { TodoComponent } from './z-machine-coding/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    DirComponentComponent,
    MydirectiveDirective,
    FilterPipeCompComponent,
    FilterPipe,
    ImpurePipeCompComponent,
    FormCompComponent,
    ConcatMapComponent,
    ForkJoinComponent,
    TempComponent,
    SubjectComponent,
    Subject2Component,
    GridComponent,
    FormArrayComponent,
    TrackbyComponent,
    TypeaheadComponent,
    StopwatchComponent,
    SiblingOneComponent,
    SiblingTwoComponent,
    Parent4Component,
    ObservableComponent,
    Observable2Component,
    NestedFolderParentComponent,
    FolderTreeComponent,
    GameBoardComponent,
    Wh1Component,
    Wh2Component,
    CarouselComponent,
    CarouselParentComponent,
    StarRatingComponent,
    ProgressBarComponent,
    DarkThemeComponent,
    ParentPaginationComponent,
    PaginationComponent,
    CdParentComponent,
    CdChildComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
