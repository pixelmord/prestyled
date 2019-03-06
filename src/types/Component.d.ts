export interface ComponentProps {
  /** Theme properties */
  theme?: {
    [key: string]: any;
  };
  /** HTML tag to be used */
  as?: string;
  [key: string]: any;
}
