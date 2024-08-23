import React, { useEffect } from "react";

export const BasicAds = () => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  
  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-4591861188995436"
      data-ad-slot="4640466102"
      style={{ display: "inline-block", height: 250, width: 300 }}
    />
  );
}
