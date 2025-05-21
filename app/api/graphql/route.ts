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
        bio: 'フロントエンドエンジニア / アニメ好き',
        age: 25,
        located: '神奈川県',
        occupation: 'フロントエンドエンジニア',
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
        'フロントエンドエンジニアとして2年の経験があり、Vue.jsやNuxt.jsを中心としたWebアプリケーション開発を得意としています。現在はバックエンドにも関心を持ち、PythonとDjango RESTFrameworkを用いたAPI開発を独学で行っています。',
        '最近はNext.jsやGraphQLの学習にも力を入れており、個人開発を通じて実践中です。',
        '将来的にはフロントエンドからバックエンドまで幅広く対応できるエンジニアとして、プロダクト開発に深く関わり、価値のある機能を届けていける存在を目指しています。',
      ],
    }),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export async function POST(req: NextRequest) {
  const handler = startServerAndCreateNextHandler<NextRequest>(server)
  return handler(req)
}
