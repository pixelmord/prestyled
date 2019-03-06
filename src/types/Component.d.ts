export interface ComponentProps {
  /** Theme properties */
  theme?: {
    textStyles: {
      [key: string]: any;
    };
    [key: string]: any;
  };
  /** HTML tag to be used */
  as?: string;
  [key: string]: any;
}
