import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()
export class MatCustomIconService {
  rootPath = "../../assets/action-icons/";
  iconNamePrefix = "app_";

  iconSet = [
    { label: "filter", fileName: "filter.svg" },
    { label: "square_plus", fileName: "add.svg" },
    { label: "search", fileName: "search.svg" },
    { label: "cv_doc", fileName: "cv.svg" },
    { label: "pencil", fileName: "edit.svg" },
    { label: "notification", fileName: "notification.svg" },
    { label: "arrow_down", fileName: "v_down.svg" }
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private ds: DomSanitizer
  ) {}
  // call this method in the parent component.ts
  // Eg usage :     <mat-icon svgIcon="app_square_plus">menu</mat-icon>
  init() {
    this.iconSet.forEach(item => {
      this.iconRegistry.addSvgIcon(
        `${this.iconNamePrefix}${item.label}`,
        this.ds.bypassSecurityTrustResourceUrl(
          `${this.rootPath}/${item.fileName}`
        )
      );
    });
  }
}
