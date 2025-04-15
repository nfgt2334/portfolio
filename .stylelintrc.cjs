// .stylelintrc.cjs
module.exports = {
  // lint機能を追加
  extends: [
    'stylelint-config-recess-order', // プロパティ並び替え
  ],
  //各種ルールを追加（正直好みで書いてるのでなくても良い）
  rules: {
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
  },
}
