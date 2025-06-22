import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const typeDefs = `#graphql
  type ProfileInfo {
    name: String!
    bio: String!
    age: Int!
    located: String!
    occupation: String!
  }

  type Profile {
    info: ProfileInfo!
    skills: [String]!
    descriptions: [String]!
  }

  type Query {
    getProfile: Profile!
  }
`

const resolvers = {
  Query: {
    getProfile: () => ({
      info: {
        name: 'Takeshi Fujiki',
        bio: 'ソフトウェアエンジニア / アニメ好き',
        age: 25,
        located: '神奈川県',
        occupation: 'ソフトウェアエンジニア',
      },
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue.js',
        'Nuxt.js',
        'TypeScript',
        'React',
        'Next.js',
        'GraphQL',
      ],
      descriptions: [
        'Webエンジニアとして2年間、主にNuxt.jsを中心としたフロントエンド開発を経験してきました。現在はNext.jsやReactなど新しい技術スタックにも挑戦し、個人開発ではClaude Codeを活用したAI駆動開発も進めています。',
        '技術の幅を広げるため、バックエンド開発やインフラ分野にも積極的に取り組んでおり、CS基礎知識の向上を目指して基本情報技術者試験の取得も予定しています。',
        '将来的には現在培っている技術力をベースに、エンジニアリングマネージャーとしてチーム全体の技術成長と生産性向上に貢献したいと考えています。',
      ],
    }),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export async function POST(req: NextRequest) {
  const handler = startServerAndCreateNextHandler<NextRequest>(server)
  return handler(req)
}
