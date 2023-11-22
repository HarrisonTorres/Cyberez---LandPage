import style from './text_struct.module.css'

interface Text_structProps {
    span?: string;
    h2?: string;
    p?: string;
}
const Text_struct = ({ span, h2, p }: Text_structProps) => {
  return (
    <div className={style.text_container_default}>
      <span>{span}</span>
      <h2>{h2}</h2>
      <p>
        {p}
      </p>
    </div>
  );
};
export default Text_struct;
