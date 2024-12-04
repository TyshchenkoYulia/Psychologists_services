export default function CardItem({ data }) {
  const { about, experience } = data;

  return (
    <>
      <p>{about}</p>
      <p>{experience}</p>
    </>
  );
}
