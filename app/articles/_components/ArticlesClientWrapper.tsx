'use client'

import Link from 'next/link'
import { MotionWrapper } from '@/components/MotionWrapper'
import { type ZennArticle, getZennArticleUrl, formatDate, getReadingTimeText } from '@/lib/zenn'
import { Calendar, Clock, Heart, MessageCircle, ExternalLink, FileText } from 'lucide-react'

const ZENN_USERNAME = 'nfgt2486'

interface ArticlesClientWrapperProps {
  articles: ZennArticle[]
}

export function ArticlesClientWrapper({ articles }: ArticlesClientWrapperProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Articles
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            技術記事・投稿一覧
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-2">
            Zennで投稿した記事の一覧です
          </p>
        </MotionWrapper>

        {articles.length === 0 ? (
          <MotionWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              記事が見つかりませんでした
            </p>
          </MotionWrapper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <MotionWrapper
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <ArticleCard article={article} />
              </MotionWrapper>
            ))}
          </div>
        )}

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href={`https://zenn.dev/${ZENN_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Zennで全ての記事を見る</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </MotionWrapper>
      </div>
    </div>
  )
}

interface ArticleCardProps {
  article: ZennArticle
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const articleUrl = getZennArticleUrl(ZENN_USERNAME, article.slug)

  return (
    <Link
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group-hover:border-blue-200 dark:group-hover:border-blue-700">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-2xl">{article.emoji}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {article.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
              {article.article_type === 'tech' ? 'Tech' : 'Idea'}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800">
              {article.body_letters_count}文字
            </span>
          </div>

          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.published_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{getReadingTimeText(article.body_letters_count)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{article.liked_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{article.comments_count}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">続きを読む</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}