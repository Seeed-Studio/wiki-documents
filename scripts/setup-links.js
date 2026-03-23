const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sites = ['en', 'zh-CN', 'ja', 'es', 'pt-BR'];
const links = ['src', 'static'];

function isWindows() {
  return process.platform === 'win32';
}

function run(cmd) {
  execSync(cmd, { stdio: 'ignore' });
}

function isSymlink(p) {
  if (!fs.existsSync(p)) return false;
  try {
    return fs.lstatSync(p).isSymbolicLink();
  } catch {
    return false;
  }
}

function main() {
  const root = process.cwd();

  for (const site of sites) {
    for (const name of links) {
      const target = path.join(root, name);
      const linkPath = path.join(root, 'sites', site, name);

      // ⚠️ 只在它是“链接”时删除
      if (isSymlink(linkPath)) {
        if (isWindows()) {
          run(`cmd /c rmdir "${linkPath}"`);
        } else {
          fs.unlinkSync(linkPath);
        }
        // console.log(`[removed old link] ${linkPath}`);
      } else if (fs.existsSync(linkPath)) {
        // 如果是正常目录，绝对不删
        // console.log(`[skip] real folder exists: ${linkPath}`);
        continue;
      }

      fs.mkdirSync(path.dirname(linkPath), { recursive: true });

      if (isWindows()) {
        run(`cmd /c mklink /J "${linkPath}" "${target}"`);
      } else {
        const rel = path.relative(path.dirname(linkPath), target);
        run(`ln -s "${rel}" "${linkPath}"`);
      }

      // console.log(`[created link] ${linkPath}`);
    }
  }
}

main();