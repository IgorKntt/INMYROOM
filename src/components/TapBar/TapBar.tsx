import { useState } from "react";
import { useHiddenRef } from "@/hooks/useHiddenRef";
import { shareLink } from "@/api/shareLink";

import shareIcon from "@/assets/icons/icon_share.svg";
import pageUpIcon from "@/assets/icons/icon_pageup.svg";
import heartIcon from "@/assets/icons/icon_heart.svg";
import commentsIcon from "@/assets/icons/icon_comments.svg";
import "./TapBar.scss";

export const TapBar = () => {

  const tapBarRef = useHiddenRef<HTMLDivElement>("tapBar_hidden");
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);


  const handlePageUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};


  return (
    <div className="tapBar"ref={tapBarRef}>
      <button onClick={shareLink}>
        <img src={shareIcon} alt="share icon" />
      </button>
      <button onClick={handlePageUp}>
        <img src={pageUpIcon} alt="page up icon" />
      </button>
      <button onClick={()=>setCommentsCount(prev=>prev+1)}>
        <img src={commentsIcon} alt="comments icon" />
        <span>{commentsCount}</span>
      </button>
      <button onClick={()=>setFavoritesCount(prev=>prev+1)}>
        <img src={heartIcon} alt="heart icon" />
        <span>{favoritesCount}</span>
      </button>
    </div>
  )
}
