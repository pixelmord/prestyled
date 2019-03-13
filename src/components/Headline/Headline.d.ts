import React, { FC, PropsWithoutRef } from 'react';
import { Theme } from '../../theme';
import { ITextProps } from '../Text';
interface IHeadlineProps extends PropsWithoutRef<JSX.IntrinsicElements['h1']> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const Headline: FC<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme;
    }
>;
export declare const H1: React.FunctionComponent<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme | undefined;
    }
>;
export declare const H2: FC<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme;
    }
>;
export declare const H3: FC<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme;
    }
>;
export declare const H4: FC<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme;
    }
>;
export declare const H5: FC<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme;
    }
>;
export declare const H6: FC<
  IHeadlineProps &
    ITextProps & {
      theme?: Theme;
    }
>;
export {};
