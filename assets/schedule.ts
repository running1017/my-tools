type TimeRange = Array<number>
type DateTime = {
  date: string
  timeRange: TimeRange
  id: number
}
type FormattedDateTime = {
  [date: string]: Array<TimeRange>
}

export const dateFormatter = (dateStr: string, zeroPadding: boolean = true): string => {
  /* YYYY-MM-DD表記をMM/DD（曜日）形式に変換
   * '2022-03-09' => '03/09（水）'
   */
  const padding: number = zeroPadding ? 2 : 0
  const dateObj = new Date(dateStr)
  const month = String(dateObj.getMonth() + 1).padStart(padding, '0')
  const date = String(dateObj.getDate()).padStart(padding, '0')
  const daysName = ['日', '月', '火', '水', '木', '金', '土']
  const day = daysName[dateObj.getDay()]
  return `${month}/${date}（${day}）`
}

export const timeFormatter = (time: number, zeroPadding: boolean = true): string => {
  /* 時刻表記の数値をHH:MM形式の文字列に変換
   * 5     => '05:00'
   * 7.5   => '07:30'
   * 12.25 => '12:15'
   */
  const padding: number = zeroPadding ? 2 : 0
  const hour: number = Math.floor(time)
  const hourStr: string = String(hour).padStart(padding, '0')
  const minute: number = (time - Math.floor(time)) * 60
  const minStr: string = String(minute).padStart(padding, '0')
  return `${hourStr}:${minStr}`
}

export const timeListFormatter = (
  timeList: Array<TimeRange>,
  separator: string = '～',
  comma: string = '、'
): string => {
  /* 時刻幅のリストをtimeFormatterを利用して文字列に変換
   * [[1.5, 3], [10, 15.25]]
   *   => '01:30～03:00、10:00～15:15'
   */
  return timeList
    .map(([start, end]) => {
      const startStr = timeFormatter(start)
      const endStr = timeFormatter(end)
      return `${startStr}${separator}${endStr}`
    })
    .join(comma)
}

const valueFormatter = (
  datetimeList: Array<DateTime>,
  merge: boolean = true
): FormattedDateTime => {
  /*
   * [{date: '2022-03-09', timeRange: [8.5, 10], id: 0},
   *  {date: '2022-03-08', timeRange: [8.5, 10], id: 1},
   *  {date: '2022-03-09', timeRange: [9, 11], id: 2},]
   *   => {
   *   2022-03-09: [[8.5, 11]]
   *   2022-03-08: [[8.5, 10]]
   * }
   */
  const formatted: FormattedDateTime = {}
  // 日付ごとにまとめる
  datetimeList.forEach((value) => {
    // datetimeListを変更しないためにArray.from()でコピーする
    if (formatted[value.date]) {
      formatted[value.date].push(Array.from(value.timeRange))
    } else {
      formatted[value.date] = [Array.from(value.timeRange)]
    }
  })
  // timeRangeをマージする
  if (merge) {
    for (const date in formatted) {
      formatted[date] = mergeRanges(formatted[date])
    }
  }
  return formatted
}

const mergeRanges = (timeList: Array<TimeRange>): Array<TimeRange> => {
  /* TimeRangeの重複をマージして開始時刻が早い順に並べ替える
   * [[13, 16], [14, 17], [8, 9]]
   *   => [[8, 9], [13, 17]]
   */
  const sorted = Array.from(timeList).sort((a, b) => a[0] - b[0])
  const merged = [sorted[0]]
  sorted.slice(1).forEach((next) => {
    // mergedの最終要素の終了時刻より開始時刻が早い場合は重複しているのでマージ
    const last = merged[merged.length - 1]
    if (next[0] <= last[1]) {
      last[1] = Math.max(next[1], last[1])
    } else {
      merged.push(next)
    }
  })
  return merged
}

export const scheduleFormatter = (datetimeList: Array<DateTime>): string => {
  /* スケジュール調整用の文面へ整形する
   * [{date: '2022-03-09', timeRange: [8.5, 10], id: 0},
   *  {date: '2022-03-08', timeRange: [8.5, 10], id: 1},
   *  {date: '2022-03-09', timeRange: [9, 11], id: 2},]
   *   => '03/08（火）08:30～10:00\n
   *       03/09（水）08:30～11:00'
   */
  const formattedDatetime = valueFormatter(datetimeList)
  return Object.keys(formattedDatetime)
    .sort() // 日付順にソート
    .map((date) => {
      const formattedDate = dateFormatter(date)
      const formattedTime = timeListFormatter(formattedDatetime[date])
      return formattedDate + formattedTime
    })
    .join('\n')
}
