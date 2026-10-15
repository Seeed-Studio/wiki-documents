import React from 'react';
import NotFound from '@theme/NotFound';
import Home from '../home/_Home';

export default function PtBrHomeWrapper() {
  if (process.env.SITE_LANG !== 'pt-br') return <NotFound />;
  return <Home locale="pt-br" />;
}