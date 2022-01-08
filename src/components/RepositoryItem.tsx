export const RepositoryItem = (props: any) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.svn_url}>access repository</a>
    </li>
  );
};
