import 'zone.js/dist/zone-node';

import {COMPILER_OPTIONS, createPlatformFactory, Sanitizer} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {ElementSchemaRegistry} from "@angular/compiler";
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';

import {PlatformNodeGuiSchemaRegistry} from "./platform-nodegui.schema-registry";
import {PlatformNodeGuiSanitizer} from "./platform-nodegui.sanitizer";

const COMMON_PROVIDERS = [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: PlatformNodeGuiSanitizer, deps: [] },
];

const COMPILER_PROVIDERS = [
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        { provide: ElementSchemaRegistry, useClass: PlatformNodeGuiSchemaRegistry, deps: [] },
      ],
    },
    multi: true,
  },
];

export const platformNodeGuiDynamic = createPlatformFactory(platformCoreDynamic,
  'nodeGuiDynamic', [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS]);
