// .stylelintrc.cjs
module.exports = {
  // lint機能を追加
  extends: [
    'stylelint-config-standard', // cssファイル対応（忘れがち）
    'stylelint-config-standard-scss', // scssに対応
    'stylelint-config-standard-vue/scss', // vueファイルに対応
    'stylelint-config-recess-order', // プロパティ並び替え
  ],
  //各種ルールを追加（正直好みで書いてるのでなくても良い）
  rules: {
    /**
     * vueファイルへ対応
     */
    'block-no-empty': null, // 空のブロックを許容する
    'no-empty-source': null, // 空のstyleブロックを許容する

    /**
     * Scssの記述に対応
     */
    'font-family-no-missing-generic-family-keyword': null, // font-familyに関する指定をしない
    'no-descending-specificity': null, // 詳細度並び順の指定をしない
    'comment-empty-line-before': null, // コメント前へ改行を入れる指定をしない
    'at-rule-empty-line-before': null, // @前へ改行をいれる指定をしない
    'declaration-empty-line-before': null, // @後や--後へ改行をいれる指定をしない

    /**
     * プロジェクトごとに指定
     */
    // grid/borderをまとめない
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['/^grid.*/', '/border/'],
      },
    ],
    // パスカルケース
    'selector-class-pattern': '^[A-Z][a-zA-Z0-9]+$',
    'selector-id-pattern': '^[A-Z][a-zA-Z0-9]+$',
    // コメントの後の空白に関する指定をしない（ちゃんとしたエラー出ないので解除）
    'scss/double-slash-comment-whitespace-inside': null,
    // セレクタータイプチェックの除外指定
    // 'selector-type-no-unknown': [
    //   true,
    //   { ignoreTypes: ['_', 'x'] }, // チェック除外項目
    // ],
  },
}
