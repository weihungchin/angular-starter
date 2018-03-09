
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "@app/core/not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [NotFoundComponent],
  providers: []
})
export class CoreComponentModule {}
