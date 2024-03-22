import "./Title.css";
const Title = ({ url, title }) => {
  return (
    <section className="title-compo">
      <img src={url} alt="" />
      <h1>{title}</h1>
    </section>
  );
};

export default Title;
