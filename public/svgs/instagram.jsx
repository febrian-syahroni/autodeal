const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <g filter="url(#a)">
      <circle cx={32} cy={30} r={20} fill="#fff" />
      <g clipPath="url(#b)">
        <path
          fill="url(#c)"
          d="M35.75 20h-7.5A6.25 6.25 0 0 0 22 26.25v7.5A6.25 6.25 0 0 0 28.25 40h7.5A6.25 6.25 0 0 0 42 33.75v-7.5A6.25 6.25 0 0 0 35.75 20Zm4.375 13.75a4.38 4.38 0 0 1-4.375 4.375h-7.5a4.38 4.38 0 0 1-4.375-4.375v-7.5a4.38 4.38 0 0 1 4.375-4.375h7.5a4.38 4.38 0 0 1 4.375 4.375v7.5Z"
        />
        <path
          fill="url(#d)"
          d="M32 25a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.125A3.13 3.13 0 0 1 28.875 30 3.129 3.129 0 0 1 32 26.875 3.129 3.129 0 0 1 35.125 30 3.13 3.13 0 0 1 32 33.125Z"
        />
        <path
          fill="url(#e)"
          d="M37.375 25.291a.666.666 0 1 0 0-1.333.666.666 0 0 0 0 1.333Z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={23.831}
        x2={40.169}
        y1={38.169}
        y2={21.831}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC107" />
        <stop offset={0.507} stopColor="#F44336" />
        <stop offset={0.99} stopColor="#9C27B0" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={28.465}
        x2={35.535}
        y1={33.535}
        y2={26.465}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC107" />
        <stop offset={0.507} stopColor="#F44336" />
        <stop offset={0.99} stopColor="#9C27B0" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={36.904}
        x2={37.847}
        y1={25.096}
        y2={24.154}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC107" />
        <stop offset={0.507} stopColor="#F44336" />
        <stop offset={0.99} stopColor="#9C27B0" />
      </linearGradient>
      <clipPath id="b">
        <path fill="#fff" d="M22 20h20v20H22z" />
      </clipPath>
      <filter
        id="a"
        width={40}
        height={40}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_305_1746"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_305_1746"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Instagram;
