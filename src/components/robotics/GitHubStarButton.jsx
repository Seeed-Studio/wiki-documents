import React, {useEffect, useState} from 'react';
import {getCachedStars, loadGitHubStars} from './githubStars.mjs';

function formatStarCount(count) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(count).replace(/K$/, 'k');
}

export default function GitHubStarButton({
  owner,
  repo,
  fallbackCount = 4400,
  ariaLabel = `Star ${repo} on GitHub`,
}) {
  const [starData, setStarData] = useState(null);
  const repoKey = `${owner}/${repo}`;
  const hasRealCount = starData?.repoKey === repoKey;
  const starCount = hasRealCount ? starData.count : fallbackCount;
  const countLabel = hasRealCount
    ? `${starCount.toLocaleString('en')} stars`
    : `${formatStarCount(starCount)} stars (initial estimate)`;

  useEffect(() => {
    let active = true;
    const cached = getCachedStars(owner, repo);
    setStarData(cached ? {repoKey, count: cached.count} : null);

    loadGitHubStars(owner, repo)
      .then((count) => {
        if (active) setStarData({repoKey, count});
      })
      .catch((error) => {
        if (active) {
          console.warn('Unable to load the GitHub star count.', error);
        }
      });

    return () => { active = false; };
  }, [owner, repo, repoKey]);

  return (
    <div className="rebot-github-star-wrap">
      <a
        className="rebot-github-star"
        href={`https://github.com/${owner}/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${ariaLabel}; ${countLabel}`}
        title={countLabel}
      >
        <span className="rebot-github-star-shine" aria-hidden="true" />
        <span className="rebot-github-star-label">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.99 10.99 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
          </svg>
          <span>Star on GitHub</span>
        </span>
        <span
          className="rebot-github-star-count"
          aria-label={countLabel}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m12 2.4 2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 16.97l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.4Z" />
          </svg>
          <span aria-live="polite">{formatStarCount(starCount)}</span>
        </span>
      </a>
    </div>
  );
}
