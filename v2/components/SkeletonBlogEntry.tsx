import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={384}
        height={347}
        viewBox="0 0 384 347"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="30" y="15" rx="3" ry="3" width="280" height="12"/>
        <rect x="30" y="40" rx="0" ry="0" width="328" height="219"/>

        <rect x="60" y="280" rx="3" ry="3" width="258" height="12"/>
        <rect x="60" y="310" rx="3" ry="3" width="258" height="12"/>
    </ContentLoader>
)

export default MyLoader

