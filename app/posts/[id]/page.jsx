const Post = ({ params }) => {
  const { id } = params;
  return <h1>Esto es un post {id}</h1>;
};

export default Post;
