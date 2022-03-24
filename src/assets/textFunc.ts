// 型宣言
type rule = {
  id: number
  pattern: string
  newSubstr: string
  reg: boolean
  all: boolean
}
type ruleGroup = {
  name: String
  rules: Array<rule>
}

export const replaceByRules = (before: string, rules: Array<rule>): string => {
  /* ruleの配列の順序でreplaceを実行
   */
  const callbackFn = (previousStr: string, currentRule: rule): string => {
    const regFlag = currentRule.all ? 'g' : 'i'
    const pattern = currentRule.reg ? new RegExp(currentRule.pattern, regFlag) : currentRule.pattern
    return currentRule.all
      ? previousStr.replaceAll(pattern, currentRule.newSubstr)
      : previousStr.replace(pattern, currentRule.newSubstr)
  }
  return rules.reduce(callbackFn, before)
}

// プリセット
export const preset: Array<ruleGroup> = [
  {
    name: '改行・空白削除',
    rules: [
      {
        id: 0,
        pattern: '\\s+',
        newSubstr: ' ',
        reg: true,
        all: true,
      },
    ],
  },
  {
    name: 'モールス符号化',
    rules: [
      {
        id: -1,
        pattern: '(.)',
        newSubstr: '$&　',
        reg: true,
        all: true,
      },
      {
        id: 0,
        pattern: '(あ|ア|ｱ)',
        newSubstr: '－－・－－',
        reg: true,
        all: true,
      },
      {
        id: 1,
        pattern: '(い|イ|ｲ)',
        newSubstr: '・－',
        reg: true,
        all: true,
      },
      {
        id: 2,
        pattern: '(う|ウ|ｳ)',
        newSubstr: '・・－',
        reg: true,
        all: true,
      },
    ],
  },
]
