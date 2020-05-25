/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import * as React from 'react';
import { Input } from '../Input';
import { Label } from '../Label';

export type FormFieldProps = BoxProps & {
  label: string | React.ReactElement;
  name: string;
};
const Field = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ as: Control = Input, variant = 'forms.formField.default', label, name, ...rest }, ref) => {
    return (
      <Box {...rest} sx={{ variant: variant }}>
        <Label htmlFor={name}>{label}</Label>
        <Control ref={ref} id={name} name={name} />
      </Box>
    );
  }
);
export { Field, Field as default, Field as FormField };
