export function sortBy<T>(
  array: T[],
  getter: (item: T) => string | number | boolean,
): T[] {
  const sortedArray = [...array]
  sortedArray.sort((a, b) =>
    // eslint-disable-next-line no-nested-ternary
    getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0,
  )
  return sortedArray
}

export function toggleListItem<T>(list: T[], item: T): T[] {
  const itemIndex = list.indexOf(item)
  if (itemIndex === -1) {
    return list.concat(item)
  }
  const newList = [...list]
  newList.splice(itemIndex, 1)
  return newList
}


export const judgeHomePath = () => {
  const docList = document.querySelectorAll('.doc_nav')
  const homeList = document.querySelectorAll('.home_nav')
  if (location.pathname === '/') {
    docList &&
      docList.forEach((el: HTMLElement) => {
        el.style.display = 'none'
        console.log(el.parentNode)
        el.parentNode.style.display = 'none'
      })
    homeList &&
      homeList.forEach((el: HTMLElement) => {
        el.style.display = 'inline-block'
      })
    document.body.classList.add('home_page')
  } else {
    document.body.classList.remove('home_page')
    homeList &&
      homeList.forEach((el: HTMLElement) => {
        el.style.display = 'none'
      })
    docList &&
      docList.forEach((el: HTMLElement) => {
        el.style.display = 'inline-block'
      })
  }
}



export function judgeIsMobile() {
  const userAgent = navigator.userAgent
  const mobileKeywords = [
    'Mobile',
    'Android',
    'iPhone',
    'iPad',
    'Windows Phone',
  ]

  for (let i = 0; i < mobileKeywords.length; i++) {
    if (userAgent.indexOf(mobileKeywords[i]) !== -1) {
      return true
    }
  }

  return false
}
export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
