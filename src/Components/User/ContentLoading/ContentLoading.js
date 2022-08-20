import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => {
  return (
    <>
      <ContentLoader
        viewBox="0 0 400 200"
        width={500}
        height={200}
        foregroundColor="silver"
        {...props}
      >
        <rect x="42.84" y="9.93" rx="8" ry="8" width="230.55" height="136.59" />
        <rect x="280.84" y="9.67" rx="0" ry="0" width="188.72" height="12.12" />
        <rect x="280.84" y="30.67" rx="0" ry="0" width="89" height="9" />
        <rect x="280.84" y="50.67" rx="0" ry="0" width="89" height="9" />
      </ContentLoader>
    </>
  );
};

export default ContentLoading;
