import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe ('testa os imports', () => {
  test('se os imports estão funcionando', () => {
    expect(1+2).toBe(3);
  })
})

