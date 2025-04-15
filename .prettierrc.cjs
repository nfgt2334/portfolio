// .prettierrc.cjs
module.exports = {
  /**
   * prettierとeslintの競合回避
   */
  // prettierの最大長ルールを少なくしてる人がいるのでディフォルト値を追加
  printWidth: 80,
  // エラーが発生する場合「のみ」末尾にセミコロンを出力
  semi: false,
  // 二重引用符の代わりに一重引用符を使用
  singleQuote: true,
  // 可能な限り末尾にカンマを付ける
  trailingComma: 'all',

  /**
   * 好みの設定
   */
  // アロー関数パラメータを括弧で囲む。型情報つけるので必須(ディフォルト値always)。
  arrowParens: 'always',
}
