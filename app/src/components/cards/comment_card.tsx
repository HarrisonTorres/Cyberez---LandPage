import React from "react";

import style from "./comment_card.module.css";
import Image from "next/image";

interface TextProps {
  comment: string;
  imgUrl: string;
  name: string;
  description: string;
}
const CommentCard: React.FC<TextProps> = ({comment, imgUrl, name, description}) => {
  return (
    <div className={style.container}>
      <div className={style.top_container}>
        <p className={style.comment}>
          {comment}
        </p>
      </div>
      <div className={style.bottom_container}>
        <div className={style.image_container}>
          <Image
            src={imgUrl}
            alt="profile"
            width={56}
            height={56}
          ></Image>
        </div>
        <div className={style.text_container}>
          <h6 className={style.name}>{name}</h6>
          <p>{description}</p>
          <div>
            <Image src="/svg/star.svg" alt="star" width={112} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
