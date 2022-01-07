import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Unform",
  description: "Form in react",
  link: "https://github.com/unform/unform",
};

export const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Repositories List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};
