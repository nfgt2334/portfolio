export interface ZennArticle {
  id: number
  title: string
  slug: string
  published_at: string
  body_updated_at: string
  path: string
  user: {
    id: number
    username: string
    name: string
    avatar_small_url: string
  }
  publication?: {
    id: number
    name: string
    display_name: string
  } | null
  emoji: string
  post_type: string
  article_type: 'tech' | 'idea'
  liked_count: number
  body_letters_count: number
  comments_count: number
  bookmarked_count: number
  is_suspending_private: boolean
  pinned: boolean
}

export interface ZennApiResponse {
  articles: ZennArticle[]
  next_page?: number
}

export async function fetchZennArticles(username: string, page = 1): Promise<ZennApiResponse> {
  try {
    // クライアントサイドの場合は自作のAPI Route経由
    if (typeof window !== 'undefined') {
      const response = await fetch(`/api/zenn?username=${username}&page=${page}`)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`Failed to fetch articles: ${response.status} - ${errorData.details || errorData.error || 'Unknown error'}`)
      }

      return await response.json()
    }
    
    // サーバーサイドの場合は直接Zenn APIを呼び出し
    const response = await fetch(
      `https://zenn.dev/api/articles?username=${username}&order=latest&page=${page}`,
      {
        headers: {
          'User-Agent': 'Portfolio-Site/1.0'
        },
        next: { revalidate: 3600 }
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    throw error
  }
}

export function getZennArticleUrl(username: string, slug: string): string {
  return `https://zenn.dev/${username}/articles/${slug}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getReadingTimeText(letterCount: number): string {
  const minutes = Math.ceil(letterCount / 600) // 1分間約600文字として計算
  return `約${minutes}分で読めます`
}