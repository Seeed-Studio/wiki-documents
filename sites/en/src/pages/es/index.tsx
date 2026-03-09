import React from 'react';
import NotFound from '@theme/NotFound';
import Home from '../home/_Home';

export default function EsHomeWrapper() {
  if (process.env.SITE_LANG !== 'es') return <NotFound />;
  return <Home locale="es" />;
}
