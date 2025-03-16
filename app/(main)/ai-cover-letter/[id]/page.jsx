const CoverLetter = async ({ params }) => {
  const { id } = await params;

  console.log(id);

  return <div>CoverLetter: {id}</div>;
};

export default CoverLetter;
