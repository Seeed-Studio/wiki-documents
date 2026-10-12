import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';

const require = createRequire(import.meta.url);
function compile(filename) {
  return require('@babel/core').transformSync(readFileSync(new URL(
    `../../../src/components/robotics/${filename}`, import.meta.url,
  ), 'utf8'), {
    babelrc: false,
    configFile: false,
    plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-transform-modules-commonjs'],
  }).code;
}
const serviceCode = compile('githubStars.mjs');
const componentCode = compile('GitHubStarButton.jsx');
const key = 'github-stars:Seeed-Projects/reBot-DevArm';
const halfHour = 30 * 60 * 1000;
const props = {owner: 'Seeed-Projects', repo: 'reBot-DevArm'};

function harness({stored, blockedStorage = false} = {}) {
  let now = 10 * halfHour;
  let fetchCount = 0;
  let finishRequest;
  const storage = new Map(stored ? [[key, JSON.stringify(stored)]] : []);
  const service = {};
  runInNewContext(serviceCode, {
    exports: service,
    Date: {now: () => now},
    window: {localStorage: {
      getItem: (name) => {
        if (blockedStorage) throw new Error('Storage blocked');
        return storage.get(name) ?? null;
      },
      setItem: (name, value) => {
        if (blockedStorage) throw new Error('Storage blocked');
        storage.set(name, value);
      },
    }},
    fetch: () => {
      fetchCount++;
      return new Promise((resolve) => { finishRequest = resolve; });
    },
  });
  function component() {
    let state = null;
    let effect;
    let updates = 0;
    const react = {
      createElement: (type, attributes, ...children) => ({type, props: {...attributes, children}}),
      useState: () => [state, (value) => { state = value; updates++; }],
      useEffect: (callback) => { effect = callback; },
    };
    const exports = {};
    runInNewContext(componentCode, {
      exports,
      require: (name) => name === 'react' ? react : service,
      console: {warn() {}},
    });
    return {
      render: (attributes = props) => exports.default(attributes).props.children[0],
      mount: () => effect(),
      get updates() { return updates; },
    };
  }
  return {
    ...service, component, storage,
    setTime: (value) => { now = value; },
    get fetchCount() { return fetchCount; },
    respond: (count, status = 200) => finishRequest({
      ok: status === 200, status, json: async () => ({stargazers_count: count}),
    }),
  };
}

test('same-repository requests share one fetch and subsequent pages use the result', async () => {
  const h = harness();
  const first = h.loadGitHubStars(props.owner, props.repo);
  const second = h.loadGitHubStars(props.owner, props.repo);
  assert.equal(first, second);
  assert.equal(h.fetchCount, 1);
  h.respond(4432);
  assert.equal(await first, 4432);
  assert.equal(await second, 4432);
  assert.equal(await h.loadGitHubStars(props.owner, props.repo), 4432);
  assert.equal(h.fetchCount, 1);
  assert.equal(JSON.parse(h.storage.get(key)).count, 4432);
});

test('real cache remains usable for 30 minutes, then revalidates without discarding it', async () => {
  const h = harness({stored: {count: 4381, timestamp: 9 * halfHour + 1}});
  assert.equal(await h.loadGitHubStars(props.owner, props.repo), 4381);
  assert.equal(h.fetchCount, 0);
  h.setTime(10 * halfHour + 1);
  const refresh = h.loadGitHubStars(props.owner, props.repo);
  assert.equal(h.fetchCount, 1);
  assert.equal(h.getCachedStars(props.owner, props.repo).count, 4381);
  h.respond(4440);
  assert.equal(await refresh, 4440);
});

test('failed requests preserve stale data and release the shared request for retry', async () => {
  const h = harness({stored: {count: 4390, timestamp: 8 * halfHour}});
  const request = h.loadGitHubStars(props.owner, props.repo);
  h.respond(null, 403);
  await assert.rejects(request, /403/);
  assert.equal(h.getCachedStars(props.owner, props.repo).count, 4390);
  const retry = h.loadGitHubStars(props.owner, props.repo);
  assert.equal(h.fetchCount, 2);
  h.respond(4441);
  assert.equal(await retry, 4441);
});

test('blocked storage still permits shared in-memory caching', async () => {
  const h = harness({blockedStorage: true});
  const request = h.loadGitHubStars(props.owner, props.repo);
  h.respond(4430);
  assert.equal(await request, 4430);
  assert.equal(await h.loadGitHubStars(props.owner, props.repo), 4430);
  assert.equal(h.fetchCount, 1);
});

test('malformed cache and invalid API values cannot become real star counts', async () => {
  const h = harness({stored: {count: -12, timestamp: 10 * halfHour}});
  assert.equal(h.getCachedStars(props.owner, props.repo), undefined);
  const request = h.loadGitHubStars(props.owner, props.repo);
  h.respond('4400');
  await assert.rejects(request, /invalid star count/);
  assert.equal(h.getCachedStars(props.owner, props.repo), undefined);
});

test('button starts at 4.4k and exposes the full real count after loading', async () => {
  const h = harness();
  const button = h.component();
  let link = button.render();
  assert.equal(link.props.children[2].props.children[1].props.children[0], '4.4k');
  assert.match(link.props.title, /initial estimate/);
  button.mount();
  const request = h.loadGitHubStars(props.owner, props.repo);
  h.respond(4432);
  await request;
  link = button.render();
  assert.equal(link.props.title, '4,432 stars');
  assert.match(link.props['aria-label'], /4,432 stars/);
  assert.equal(link.props.children[2].props.children[1].props.children[0], '4.4k');
  const otherRepo = button.render({...props, repo: 'other'});
  assert.match(otherRepo.props.title, /initial estimate/);
});

test('button displays expired real cache immediately and retains it if refresh fails', async () => {
  const h = harness({stored: {count: 4381, timestamp: 8 * halfHour}});
  const button = h.component();
  button.render();
  button.mount();
  assert.equal(button.render().props.title, '4,381 stars');
  const request = h.loadGitHubStars(props.owner, props.repo);
  h.respond(null, 403);
  await assert.rejects(request, /403/);
  assert.equal(button.render().props.title, '4,381 stars');
});

test('page navigation does not cancel the next page’s request or update an unmounted button', async () => {
  const h = harness();
  const first = h.component();
  first.render();
  const unmount = first.mount();
  unmount();
  const updatesBeforeResponse = first.updates;
  const second = h.component();
  second.render();
  second.mount();
  const request = h.loadGitHubStars(props.owner, props.repo);
  assert.equal(h.fetchCount, 1);
  h.respond(4432);
  await request;
  assert.equal(first.updates, updatesBeforeResponse);
  assert.equal(second.render().props.title, '4,432 stars');
});
