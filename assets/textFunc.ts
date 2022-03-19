// 型宣言
type rule = {
  id: number
  pattern: string
  newSubstr: string
  reg: boolean
  all: boolean
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
