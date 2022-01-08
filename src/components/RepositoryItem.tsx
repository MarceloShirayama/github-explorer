export type Repository = {
  name: string;
  description: string;
  svn_url: string;
};

type RepositoryItemProps = {
  repository: Repository;
};

export const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.svn_url}>access repository</a>
    </li>
  );
};
