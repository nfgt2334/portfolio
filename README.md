# Frontend README

## プロジェクト構成

```
/
|-- portfolio/
|   |-- app/            # Next.js App Router
|   |-- components/     # 共通コンポーネント
|   |-- utils/          # ユーティリティ関数
|   |-- context/        # コンテキストAPI
|   |-- providers/      # プロバイダー
|   |-- hooks/          # カスタムフック
|   |-- lib/            # ライブラリ
|   |-- test/           # テスト関連
|   |-- types/          # 型定義
|   |-- middleware.ts   # ミドルウェア
|-- public/             # 静的ファイル
```

## コンポーネント設計

- **Atomic Design**を参考に設計
  - `app/`: Next.jsのアプリケーションルーター
  - `components/`: 共通コンポーネント(フォーム、リスト等)
  - `utils/`: プロジェクト内共通のユーティリティー関数を定義(エラーハンドラー等)
  - `context/`: TODO
  - `providers/`: TODO フラッシュメッセージ等
  - `hooks/`: カスタムフック(useAuth等)
  - `lib/`: ライブラリ関連(バリデーションスキーマ等)
  - `middleware/`: ミドルウェア

## Typescript

- 型定義は明示的に行う
- 横断的に使用される型は`src/types/`に定義し、コンポーネント内でしか使用されない型は`app/(pagename)/types.tsx`に定義する

## スタイリング

- Tailwind CSSを使用
- 複雑なスタイルはコンポーネント内でクラス名を変数化

```typescript
const buttonStyles = {
    base: 'px-4 py-2 rounded',
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gra-500 text-white',
}
```

## パフォーマンス最適化

- 画像の最適化(Next.jsの`Image`コンポーネントを使用)