import { RespositoryItem } from "./RepositoryItem"

const repositoryName = 'unform'

export const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Repositories List</h1>
      <ul>
        <RespositoryItem />
        <RespositoryItem />
        <RespositoryItem />
        <RespositoryItem />
      </ul>
    </section>
  )
}
