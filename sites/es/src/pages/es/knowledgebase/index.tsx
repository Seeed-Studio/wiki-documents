import React from 'react';
import NotFound from '@theme/NotFound';
import KnowledgebasePage from '../../knowledgebase/KnowledgebasePage';

export default function KnowledgebaseEs() {
  if (process.env.SITE_LANG !== 'es') return <NotFound />;
  return <KnowledgebasePage locale="es" />;
}
