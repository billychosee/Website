import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type DropdownItem = {
  readonly label: string;
  readonly href: string;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly icon: IconDefinition;
  readonly dropdown?: {
    readonly items: readonly DropdownItem[];
  };
};