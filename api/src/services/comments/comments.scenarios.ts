import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    abby: {
      data: {
        name: 'Abby Abigail',
        body: 'I have been to the Abby',
        post: {
          create: {
            title: 'Abby has a new title',
            body: 'The quick brown fox jumped over the lazy dog.'
          }
        },
      },
    },
    becky: {
      data: {
        name: 'Becky Beck',
        body: 'I like listening to Beck',
        post: {
          create: {
            title: 'Beck has a new title',
            body: 'The five boxing wizards jump quickly.'
          }
        },
      },
    },
  },
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
      }
    }
  }
})

export type StandardScenario = typeof standard
