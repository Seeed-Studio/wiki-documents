import React from 'react';
import NotFound from '@theme/NotFound';
import KnowledgebasePage from '../../knowledgebase/KnowledgebasePage';

export default function KnowledgebaseCn() {
  if (process.env.SITE_LANG !== 'cn') return <NotFound />;
  return <KnowledgebasePage locale="cn" />;
}
