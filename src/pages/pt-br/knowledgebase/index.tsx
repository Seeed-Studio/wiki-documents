import React from 'react';
import NotFound from '@theme/NotFound';
import KnowledgebasePage from '../../knowledgebase/KnowledgebasePage';

export default function KnowledgebasePtBr() {
  if (process.env.SITE_LANG !== 'pt-br') return <NotFound />;
  return <KnowledgebasePage locale="pt-br" />;
}