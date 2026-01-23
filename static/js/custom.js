function initCustomScripts() {
  const announcementTranslations = {
    en: `Collaborate with Seeed - <a target="_blank" href="https://www.seeedstudio.com/blog/affiliate-program/">Creator</a>, <a target="_blank" href="https://www.seeedstudio.com/ranger-program/">Ranger</a>, or <a target="_blank" href="https://wiki.seeedstudio.com/contributors/">Contributor</a>, there is always a role ideal for you!`,
    cn: `与 Seeed 合作 - <a target="_blank" href="https://www.seeedstudio.com/blog/affiliate-program/">创作者</a>、<a target="_blank" href="https://www.seeedstudio.com/ranger-program/">社区大使</a>， <a target="_blank" href="https://wiki.seeedstudio.com/contributors/">贡献者</a>，总有一个角色适合你！`,
    ja: `Seeed と協力しましょう - <a target="_blank" href="https://www.seeedstudio.com/blog/affiliate-program/">クリエイター</a>、<a target="_blank" href="https://www.seeedstudio.com/ranger-program/">コミュニティアンバサダー</a>、または <a target="_blank" href="https://wiki.seeedstudio.com/contributors/">コントリビューター</a>、あなたにぴったりの役割がきっと見つかります！`,
    es: `Colabora con Seeed - <a target="_blank" href="https://www.seeedstudio.com/blog/affiliate-program/">Creadores</a>, <a target="_blank" href="https://www.seeedstudio.com/ranger-program/">Embajador/a de la comunidad</a> o <a target="_blank" href="https://wiki.seeedstudio.com/contributors/">Colaboradores</a>, siempre hay un rol ideal para ti.`,
  };
  const LOCALE_PREFIXES = ['/cn', '/ja', '/es'];

  let announcementElement = null;
  let announcementElementObserver = null;
  let isUpdatingAnnouncement = false;

  function getLocaleFromPath(pathname) {
    if (pathname === '/cn' || pathname.startsWith('/cn/')) {
      return 'cn';
    }
    if (pathname === '/ja' || pathname.startsWith('/ja/')) {
      return 'ja';
    }
    if (pathname === '/es' || pathname.startsWith('/es/')) {
      return 'es';
    }
    return 'en';
  }

  function applyAnnouncementText() {
    const el = document.getElementById('announcement-text');
    if (!el) {
      return false;
    }
    const locale = getLocaleFromPath(window.location.pathname || '/');
    const html = announcementTranslations[locale] || announcementTranslations.en;
    if (el.dataset.localeApplied === locale && el.innerHTML === html) {
      return true;
    }
    isUpdatingAnnouncement = true;
    el.innerHTML = html;
    el.dataset.localeApplied = locale;
    isUpdatingAnnouncement = false;
    return true;
  }

  function watchAnnouncementElement(el) {
    if (announcementElementObserver) {
      announcementElementObserver.disconnect();
    }
    announcementElementObserver = new MutationObserver(() => {
      if (isUpdatingAnnouncement) {
        return;
      }
      applyAnnouncementText();
    });
    announcementElementObserver.observe(el, { childList: true, subtree: true });
  }

  function ensureAnnouncementBar() {
    const el = document.getElementById('announcement-text');
    if (!el) {
      announcementElement = null;
      if (announcementElementObserver) {
        announcementElementObserver.disconnect();
        announcementElementObserver = null;
      }
      return;
    }
    if (announcementElement !== el) {
      announcementElement = el;
      watchAnnouncementElement(el);
    }
    applyAnnouncementText();
  }

  const bodyObserver = new MutationObserver(() => {
    ensureAnnouncementBar();
  });
  bodyObserver.observe(document.body, { childList: true, subtree: true });

  ensureAnnouncementBar();

  ['pushState', 'replaceState'].forEach((method) => {
    const original = history[method];
    history[method] = function () {
      const result = original.apply(this, arguments);
      setTimeout(ensureAnnouncementBar, 0);
      return result;
    };
  });

  window.addEventListener('popstate', function () {
    setTimeout(ensureAnnouncementBar, 0);
  });

  // sidebar location
  setTimeout(() => {
    const list = document.querySelectorAll('.menu__link--active')
    // 检查选中菜单项是否存在
    if (list.length) {
      // 使用 scrollIntoView 将选中菜单项滚动到可视区域
      list[list.length - 1].scrollIntoView({ block: 'center' })
    }
  }, 1000)

  // 遍历每个 <a> 标签并移除 rel 属性
  const links = document.querySelectorAll('a[rel="noopener noreferrer"]')
  links.forEach((link) => {
    link.removeAttribute('rel')
  })

  // page not found
  if (document.body.textContent.includes('Page Not Found')) {
    let element = document.querySelector('.hero__title') // 使用元素的ID选择元素
    let parent = element.parentNode // 获取父元素
    let children = Array.from(parent.children) // 获取父元素的所有子元素

    for (let i = 0; i < children.length; i++) {
      // 检查元素是否是我们想要保留的元素
      if (children[i] !== element) {
        parent.removeChild(children[i]) // 如果不是，删除该元素
      }
    }
    const child = document.createElement('div')
    child.innerHTML = `
            <p>We could not find what you were looking for.</p>
            <p>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
            <a
            href="/Getting_Started/"
            target="_blank"
            rel="noopener noreferrer"
            class="get_one_now_item text--center"
          >
            <strong>
              <span>
                <font color="FFFFFF" size="4">
                Back to the Start
                </font>
              </span>
            </strong>
          </a>

          <a
          href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34122324"
          target="_blank"
          rel="noopener noreferrer"
          class="get_one_now_item text--center"
        >
          <strong>
            <span>
              <font color="FFFFFF" size="4">
                Report on GitHub
              </font>
            </span>
          </strong>
        </a>
   `
    parent.appendChild(child)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomScripts, { once: true })
} else {
  initCustomScripts()
}

