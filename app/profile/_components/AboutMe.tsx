'use client'

import { MotionWrapper } from '@/components/MotionWrapper'

export function AboutMe() {
  return (
    <div>
      <MotionWrapper
        className="w-full max-w-2xl text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* About Me */}
        <h2 className="text-2xl font-semibold mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-center text-center gap-1 sm:gap-2">
          <span>About Me</span>
          <span>ー</span>
          <span className="text-gray-600 dark:text-gray-400">
            幅広く活躍できるエンジニアを目指しています
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <span className="block">
            フロントエンドエンジニアとして2年の経験があり、Vue.jsやNuxt.jsを中心としたWebアプリケーション開発を得意としています。
            現在はバックエンドにも関心を持ち、PythonとDjango REST
            Frameworkを用いたAPI開発を独学で行っています。
          </span>
          <span className="block">
            最近はNext.jsやTypeScriptの学習にも力を入れており、個人開発を通じて実践中です。
          </span>
          <span className="block">
            将来的にはフロントエンドからバックエンドまで幅広く対応できるエンジニアとして、
            プロダクト開発に深く関わり、価値のある機能を届けていける存在を目指しています。
          </span>
        </p>
      </MotionWrapper>
    </div>
  )
}
