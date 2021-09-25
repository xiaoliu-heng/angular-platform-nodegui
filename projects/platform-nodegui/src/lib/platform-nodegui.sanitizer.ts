import {Sanitizer, SecurityContext} from "@angular/core";

export class PlatformNodeGuiSanitizer extends Sanitizer {
  sanitize(context: SecurityContext, value: {} | string | null): string | null {
    return String(value);
  }
}
