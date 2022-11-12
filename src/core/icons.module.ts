import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatIconModule],
  exports: [MatIconModule]
})
export class IconsModule {
  icons = ['google-icon']; // add more icons if needed

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {

    this.icons.forEach(iconName => iconRegistry.addSvgIcon(
      iconName,
      sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`)
    ));
  }
}
