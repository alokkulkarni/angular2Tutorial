import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactComponent } from './contact.component';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

import { ContactService } from './contact.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ContactComponent, AwesomePipe, HighlightDirective],
  providers: [ContactService]
})
export class ContactModule { } 