import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

export const loading = (args) => {
  return Loading ? <Loading {...args} /> : null
}

export const empty = (args) => {
  return Empty ? <Empty {...args} /> : null
}

export const failure = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : null
}

export const success = (args) => {
  return Success ? <Success article={standard().article} /> : null
}

export default { title: 'Cells/ArticleCell' }
