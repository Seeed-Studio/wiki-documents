window.onload = function () {
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

