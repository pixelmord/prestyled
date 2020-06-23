import { Theme } from 'theme-ui';
export interface PrestyledTheme extends Theme {
    name: string;
    [key: string]: any;
}
export declare const defaultTheme: PrestyledTheme;
export default defaultTheme;
