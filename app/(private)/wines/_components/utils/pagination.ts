interface PageItem {
  type: 'page' | 'ellipsis'
  value: number
}

// ページ数を返す
const calcPageCount = (perPage: number, total: number): number => {
  return Math.ceil(total / perPage)
}

const calcStartCount = (page: number, perPage: number): number => {
  return perPage * (page - 1) + 1
}

const calcEndCount = (page: number, perPage: number, total: number): number => {
  return Math.min(page * perPage, total)
}

const calcPaginationRange = (page: number, total: number, totalPages: number) => {
  let startPage = 1
  let endPage = totalPages

  // 総ページ数がMAX_DISPLAY_PAGER_COUNTより多い場合のみ計算を行う
  if (totalPages > total) {
    const sideWidth = 1
    startPage = Math.max(page - sideWidth, 1)
    endPage = Math.min(page + sideWidth, totalPages)

    // 現在ページの位置に応じた処理
    if (page === 1) {
      endPage = total
    } else if (page === totalPages) {
      startPage = Math.max(totalPages - total + 1, 1)
      endPage = totalPages - 1
    }
  }
  return { startPage, endPage }
}

const createPageList = (startPage: number, endPage: number, totalPages: number): PageItem[] => {
  const pageItems: PageItem[] = []

  // 必ず1は表示させるので最初のページを追加
  pageItems.push({ type: 'page', value: 1 })

  // ...の追加が必要か判定
  if (startPage > 2) {
    pageItems.push({ type: 'ellipsis', value: startPage - 1 })
  }

  // 中間のページャーを追加処理
  for (let i = startPage; i <= endPage; i++) {
    if (i !== 1 && i !== totalPages) {
      pageItems.push({ type: 'page', value: i })
    }
  }

  // 最後の省略記号の追加が必要か判定
  if (endPage < totalPages - 1) {
    pageItems.push({ type: 'ellipsis', value: endPage + 1 })
  }

  // 最後のページが既にリストにない場合は追加
  if (!pageItems.find((item) => item.value === totalPages)) {
    pageItems.push({ type: 'page', value: totalPages })
  }

  return pageItems
}

export const createPagination = (page: number, perPage: number, total: number) => {
  const totalPages = calcPageCount(perPage, total)
  const { startPage, endPage } = calcPaginationRange(page, total, totalPages)
  return createPageList(startPage, endPage, totalPages)
}

// 表示する件数のテキストを計算
export const calcDisplayText = (page: number, perPage: number, total: number): string => {
  const maxPageCount = calcPageCount(perPage, total)
  const startCount = calcStartCount(page, perPage)
  const endCount = calcEndCount(page, perPage, total)
  const lastPage = page === maxPageCount
  const singleItem = startCount === endCount

  return lastPage && singleItem ? `${endCount}件を表示` : `${startCount}〜${endCount}件を表示`
}
