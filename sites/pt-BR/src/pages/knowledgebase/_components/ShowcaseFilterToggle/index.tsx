/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback} from 'react';
import clsx from 'clsx';
import {useHistory, useLocation} from '@docusaurus/router';

import {prepareUserState} from '../../KnowledgebasePage';

import styles from './styles.module.css';

export type Operator = 'OR' | 'AND';

export const OperatorQueryKey = 'operator';

export function readOperator(search: string): Operator {
  return (new URLSearchParams(search).get(OperatorQueryKey) ??
    'OR') as Operator;
}

type Props = {
  operator: Operator;
  ariaLabel: string;
  orLabel: string;
  andLabel: string;
};

export default function ShowcaseFilterToggle({
  operator,
  ariaLabel,
  orLabel,
  andLabel,
}: Props): JSX.Element {
  const id = 'showcase_filter_toggle';
  const location = useLocation();
  const history = useHistory();

  const toggleOperator = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(OperatorQueryKey);
    if (operator === 'OR') {
      searchParams.append(OperatorQueryKey, 'AND');
    }
    history.push({
      ...location,
      search: searchParams.toString(),
      state: prepareUserState(),
    });
  }, [operator, location, history]);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        className={clsx(styles.contribution_input, 'screen-reader-only')}
        aria-label={ariaLabel}
        onChange={toggleOperator}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleOperator();
          }
        }}
        checked={operator === 'AND'}
      />
      <label htmlFor={id} className={clsx(styles.checkboxLabel, 'shadow--md')}>
        <span className={styles.checkboxLabelOr}>{orLabel}</span>
        <span className={styles.checkboxLabelAnd}>{andLabel}</span>
      </label>
    </div>
  );
}
