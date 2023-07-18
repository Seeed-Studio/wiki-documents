window.onload = function () {
  setTimeout(() => {
    console.log(999)
    const list = document.querySelectorAll(".menu__link--active")

    // 检查选中菜单项是否存在
    if (list.length) {
      // 使用 scrollIntoView 将选中菜单项滚动到可视区域
      list[list.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 1000)
}
