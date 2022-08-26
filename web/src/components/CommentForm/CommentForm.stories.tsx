import CommentForm from './CommentForm'

export const generated = () => {
  const id = Math.floor(Math.random() * 1000)
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    ctx.delay(1000)

    return {
      createComment: {
        id,
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return <CommentForm postId={id} />
}

export default { title: 'Components/CommentForm' }
