import { useEffect, useState } from "react";
import "./TapBar.scss";

import shareIcon from "@/assets/icons/icon_share.svg";
import pageUpIcon from "@/assets/icons/icon_pageup.svg";
import heartIcon from "@/assets/icons/icon_heart.svg";
import commentsIcon from "@/assets/icons/icon_comments.svg";

export const TapBar = () => {

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  useEffect(()=>{
    let prevScroll: number = 0;
    let isThrottled: boolean = false;
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (isThrottled) {
        return;
      }

      isThrottled = true;

      const currentScroll = window.pageYOffset;
      const currentOffset = currentScroll - prevScroll;

      if (currentOffset > 200) {
        setIsHidden(true);
      } else if (currentOffset < 0)  {
        setIsHidden(false);
      }

      prevScroll = window.pageYOffset;
      setTimeout(()=> {
        isThrottled = false;
      }, 250);

      clearTimeout(timeout);
      timeout = setTimeout(()=> {
         prevScroll = window.pageYOffset;
         setIsHidden(false);
      }, 1000);

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
          title: document.title,
          url: window.location.href
      })
          .then(() => console.log('Shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
  } else {
      const el = document.createElement('textarea');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      if (document.execCommand('copy')) {
        console.log('Link copied to clipboard:', window.location.href);
      } else {
        console.log('Failed copy link to clipboard');
      }
      document.body.removeChild(el);
    }
  };


  const handlePageUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};


  return (
    <div className = {`tapBar ${isHidden ? "tapBar_hidden" : "" }`} >
      <button onClick={handleShare}>
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
