const Children = (v) => {
  console.log("=====?", v);
  return (
    <>
      {v.data &&
        v.data.map((i, index) => (
          <div key={index}>
            <div>{i.postId}</div>
            <div>{i.id}</div>
            <div>{i.name}</div>
            <div>{i.email}</div>
            <div>{i.body}</div>
          </div>
        ))}
    </>
  );
};
export default Children;
