export interface NavBarItem {
  /**
   * URL for this item to link to
   */
  url: string;
  /**
   * Used as title for anchor
   */
  label: string;
  // could be some union or enum, but for the simplicity let's stick with string
  /**
   * Icon name (passed to Icon component)
   */
  icon: string;
}
