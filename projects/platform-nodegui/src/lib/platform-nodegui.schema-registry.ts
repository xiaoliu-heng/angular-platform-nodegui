import {ElementSchemaRegistry} from "@angular/compiler";
import {SchemaMetadata, SecurityContext} from "@angular/core";

export class PlatformNodeGuiSchemaRegistry extends ElementSchemaRegistry {
  allKnownElementNames(): string[] {
    return [];
  }

  getDefaultComponentElementName(): string {
    return "";
  }

  getMappedPropName(propName: string): string {
    return "";
  }

  hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean {
    return true;
  }

  hasProperty(tagName: string, propName: string, schemaMetas: SchemaMetadata[]): boolean {
    return true;
  }

  normalizeAnimationStyleProperty(propName: string): string {
    return "";
  }

  normalizeAnimationStyleValue(camelCaseProp: string, userProvidedProp: string, val: string | number): { error: string; value: string } {
    return {error: "", value: ""};
  }

  validateAttribute(name: string): { error: boolean; msg?: string } {
    return {error: false};
  }

  validateProperty(name: string): { error: boolean; msg?: string } {
    return {error: false};
  }

  securityContext(elementName: string, propName: string, isAttribute: boolean): SecurityContext {
    return SecurityContext.NONE;
  }

}
