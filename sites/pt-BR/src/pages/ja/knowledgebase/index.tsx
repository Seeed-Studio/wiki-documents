import React from 'react';
import NotFound from '@theme/NotFound';
import KnowledgebasePage from '../../knowledgebase/KnowledgebasePage';

export default function KnowledgebaseJa() {
  if (process.env.SITE_LANG !== 'ja') return <NotFound />;
  return <KnowledgebasePage locale="ja" />;
}
