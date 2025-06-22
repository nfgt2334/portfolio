import { type ZennArticle } from '@/lib/zenn'
import { ArticlesClientWrapper } from './ArticlesClientWrapper'

const ZENN_USERNAME = 'nfgt2486'

async function fetchZennArticlesServer(username: string): Promise<ZennArticle[]> {
  try {
    const response = await fetch(
      `https://zenn.dev/api/articles?username=${username}&order=latest`,
      {
        headers: {
          'User-Agent': 'Portfolio-Site/1.0'
        },
        next: { revalidate: 3600 } // 1時間キャッシュ
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`)
    }

    const data = await response.json()
    return data.articles || []
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    return []
  }
}

export async function ArticlesContentServer() {
  const articles = await fetchZennArticlesServer(ZENN_USERNAME)

  return <ArticlesClientWrapper articles={articles} />
}

