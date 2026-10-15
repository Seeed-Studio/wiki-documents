const ghpages = require('gh-pages');

const token = process.env.GITHUB_TOKEN;
const repository = process.env.GITHUB_REPOSITORY;

if (!token) {
  console.error('Missing GITHUB_TOKEN');
  process.exit(1);
}

if (!repository) {
  console.error('Missing GITHUB_REPOSITORY');
  process.exit(1);
}

const repo = `https://x-access-token:${token}@github.com/${repository}.git`;

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo,
    history: false,
    dotfiles: true,
    message: 'Deploy website',
    user: {
      name: 'github-actions[bot]',
      email: 'github-actions[bot]@users.noreply.github.com',
    },
  },
  (err) => {
    if (err) {
      console.error('Deploy failed:', err);
      process.exit(1);
    }

    console.log('Deployed to gh-pages with history=false');
  }
);