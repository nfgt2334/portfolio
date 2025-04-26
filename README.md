# ポートフォリオサイト

このリポジトリは、私のポートフォリオサイトのソースコードです。  
**Next.js × TypeScript × Tailwind CSS** を用いて開発し、設計・ディレクトリ構成・再利用性などを意識して作成しました。

デモサイト：[https://portfolio-puce-gamma-25.vercel.app/](https://portfolio-puce-gamma-25.vercel.app/)

---

## 使用技術

- フロントエンド：Next.js (App Router)
- 言語：TypeScript
- スタイリング：Tailwind CSS
- デプロイ：Vercel
- アイコン：React Icons
- お問い合わせ機能：react-hook-forms + zod + Resend

---

## 機能・構成

- トップページ
  - スクロールアニメーションやナビゲーション
- Profile - プロフィール
  - 自己紹介、スキルセット、経験の概要を記載
- Works - 職務経歴
  - これまでの職務経歴の一覧と、詳細ページを表示
- Contact - お問い合わせ
  - メール送信用のフォーム

---

## 工夫した点

- **Atomic Designをベースにコンポーネントを整理**
- **Tailwind CSSのユーティリティクラスでスピード感のある開発**
- **レスポンシブデザインでPC/スマホ両方に最適化**
- **再利用可能なコンポーネント設計で保守性を意識**
- **コードの可読性と命名規則の統一**
- **Resendを使用したお問い合わせ機能の実装**

---

## 今後の改善ポイント

- APIとの連携を含む動的データ表示の強化
- Worksの内容を随時アップデート
- テストコードの導入 (Vitest)