// scripts/setup-links.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sites = ['en', 'zh-CN', 'ja', 'es'];
const links = ['src', 'static'];

function rmForce(p) {
  try {
    fs.rmSync(p, { recursive: true, force: true });
  } catch {}
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function isWindows() {
  return process.platform === 'win32';
}

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

function main() {
  const root = process.cwd();

  for (const site of sites) {
    for (const name of links) {
      const target = path.join(root, name);                 // root/src or root/static
      const linkPath = path.join(root, 'sites', site, name); // sites/en/src

      // 清理旧的（可能是坏掉的 symlink 或者误创建的目录）
      rmForce(linkPath);
      ensureDir(path.dirname(linkPath));

      if (isWindows()) {
        // mklink /J <link> <target>
        // 注意：cmd 里路径要用反斜杠
        const lp = linkPath.replace(/\//g, '\\');
        const tp = target.replace(/\//g, '\\');
        run(`cmd /c mklink /J "${lp}" "${tp}"`);
      } else {
        // ln -s <target> <link>
        // 用相对路径更稳
        const rel = path.relative(path.dirname(linkPath), target);
        run(`ln -s "${rel}" "${linkPath}"`);
      }
    }
  }

  console.log('✅ Links created/updated.');
}

main();