const CACHE_TTL_MS = 30 * 60 * 1000;
const starCache = new Map();
const pendingRequests = new Map();

function cacheKey(owner, repo) {
  return `github-stars:${owner}/${repo}`;
}

function isValidCache(cached) {
  return Number.isInteger(cached?.count) && cached.count >= 0 &&
    Number.isFinite(cached.timestamp) && cached.timestamp <= Date.now();
}

export function getCachedStars(owner, repo) {
  const key = cacheKey(owner, repo);
  let cached = starCache.get(key);

  try {
    const stored = JSON.parse(window.localStorage.getItem(key));
    if (isValidCache(stored) && (!cached || stored.timestamp > cached.timestamp)) {
      cached = stored;
      starCache.set(key, stored);
    }
  } catch {
    // In-memory caching still works when localStorage is unavailable.
  }

  return cached;
}

export function loadGitHubStars(owner, repo) {
  const key = cacheKey(owner, repo);
  const cached = getCachedStars(owner, repo);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return Promise.resolve(cached.count);
  }

  if (pendingRequests.has(key)) return pendingRequests.get(key);

  // The request belongs to the repository, so unmounting one button must not
  // cancel it for other buttons or the next documentation page.
  const request = fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
      return response.json();
    })
    .then((data) => {
      if (!Number.isInteger(data.stargazers_count) || data.stargazers_count < 0) {
        throw new Error('GitHub API returned an invalid star count');
      }
      const result = {count: data.stargazers_count, timestamp: Date.now()};
      starCache.set(key, result);
      try {
        window.localStorage.setItem(key, JSON.stringify(result));
      } catch {
        // Preserve the live value in memory when storage cannot be written.
      }
      return result.count;
    })
    .finally(() => pendingRequests.delete(key));

  pendingRequests.set(key, request);
  return request;
}
