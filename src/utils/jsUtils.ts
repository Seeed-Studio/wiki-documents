/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
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
