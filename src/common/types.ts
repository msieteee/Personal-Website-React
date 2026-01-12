/**
 * @license
 * Copyright © 2025, Miguel Alphonzo Sietereales.
 */

import { CSSObject } from "styled-components";

/**
 * Non-CSS Property Types
 * !!! SORT ALPHABETICALLY !!!
 */

export interface Attributable {
  attributes?: Attribute;
}

export interface Attribute {
  [key: string]: Attribute | string | number | (string | number)[];
}

export interface Stylable {
  styles?: CSSObject;
}

export type HexColor = `#${string}`;
