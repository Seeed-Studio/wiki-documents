const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sites = ['en', 'zh-CN', 'ja', 'es', 'pt-BR'];
const links = ['src', 'static'];

function isWindows() {
  return process.platform === 'win32';
}

function isSymlink(p) {
  if (!fs.existsSync(p)) return false;
  try {
    return fs.lstatSync(p).isSymbolicLink();
  } catch {
    return false;
  }
}

function removeLinkOnly(p) {
  if (!fs.existsSync(p)) return;

  // ⚠️ 关键：只删“链接”，不是目录
  if (!isSymlink(p)) {
    console.log(`[skip] not a symlink: ${p}`);
    return;
  }

  if (isWindows()) {
    execSync(`cmd /c rmdir "${p}"`);
  } else {
    fs.unlinkSync(p);
  }

  console.log(`[removed link] ${p}`);
}

function main() {
  const root = process.cwd();

  for (const site of sites) {
    for (const name of links) {
      const linkPath = path.join(root, 'sites', site, name);
      removeLinkOnly(linkPath);
    }
  }
}

main();