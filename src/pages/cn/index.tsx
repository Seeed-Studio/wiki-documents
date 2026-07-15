import React from 'react';
import NotFound from '@theme/NotFound';
import Home from '../home/_Home';

export default function CnHomeWrapper() {
  if (process.env.SITE_LANG !== 'cn') return <NotFound />;
  return <Home locale="cn" />;
}
