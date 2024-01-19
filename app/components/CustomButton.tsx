import * as React from 'react';
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps, ButtonPropsVariantOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';


export const CustomButton = ({ 
    variant,
    boxShadow,
    textTransform,
    fontSize,
    padding,
    border,
    lineHeight,
    backgroundColor,
    borderColor,
    fontFamily,
    classname, 
    onClick,
    children, 
}: {
    variant: OverridableStringUnion<"text" | "contained" | "outlined", ButtonPropsVariantOverrides> | undefined
    boxShadow?: string,
    textTransform?: string,
    fontSize?: number,
    padding?: string,
    border?: string,
    lineHeight?: string,
    backgroundColor?: string,
    borderColor?: string,
    fontFamily?: string,
    classname?: string,
    onClick?: any,
    children: ReactNode
}) => {
  return (
    <Stack spacing={2} direction="row">
        <BootstrapButton variant={variant}>{children}</BootstrapButton>
    </Stack>
  );
};

const BootstrapButton = styled(Button)({
    variant: 'contained',
    text: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });