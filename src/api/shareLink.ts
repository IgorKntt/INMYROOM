

export const shareLink = () => {
  if (navigator.share !== undefined) {
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
