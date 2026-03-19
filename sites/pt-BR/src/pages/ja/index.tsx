import React from 'react';
import NotFound from '@theme/NotFound';
import Home from '../home/_Home';

export default function JaHomeWrapper() {
  if (process.env.SITE_LANG !== 'ja') return <NotFound />;
  return <Home locale="ja" />;
}
