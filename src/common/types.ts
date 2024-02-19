/**
 * @license
 * Copyright © 2023, Miguel Alphonzo Sietereales.
 */

import * as CSS from "css-enums";
import { CSSObject } from "styled-components";

/**
 * Background Types
 * CSS Property Types
 * !!! SORT ALPHABETICALLY !!!
 */

export type BackgroundColor = CSS.BackgroundColor | HexColor;

export type BackgroundSize =
  | CSS.BackgroundSize
  | `${Length}`
  | `${Length} ${Length}`;

/**
 * Border Types
 */
export type BorderColor = CSS.BorderColor | HexColor;

export type BorderRadius = CSS.BorderRadius | Length;

export type BorderWidth = CSS.BorderWidth | Length;

export type Color = CSS.Color | HexColor;

export type Gap = CSS.Gap | Length | `${Length} ${Length}`;

export type Height = CSS.Height | Length;

export type Padding = CSS.Padding | WhiteSpaceLength;

export type Width = CSS.Width | Length;

/**
 * Non-CSS Property Types
 * !!! SORT ALPHABETICALLY !!!
 */
export interface Stylable {
  styles?: CSSObject;
}

export interface Attributable {
  attributes?: Attribute;
}

export interface Attribute {
  [key: string]: Attribute | string | number | (string | number)[];
}

export type HexColor = `#${string}`;

/**
 * Position Types
 */
export type Length = 0 | `${number}${string}`;

export type WhiteSpaceLength =
  | Length
  | `${Length} ${Length}`
  | `${Length} ${Length} ${Length}`
  | `${Length} ${Length} ${Length} ${Length}`;
