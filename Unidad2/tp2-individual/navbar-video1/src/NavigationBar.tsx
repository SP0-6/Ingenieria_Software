import "./Navbar.css";

export default function NavigationBar() {
  return (
    <nav className="navigation-menu">
      <div className="nav-left">
        <div className="brand">
          <div className="logo">
            {/* SVG 1 */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg logo-svg-one"
            >
              <foreignObject x="-10" y="-20" width="60" height="60">
                <div
                  style={{
                    backdropFilter: "blur(10px)",
                    clipPath: "url(#bgblur_0_23404_1682_clip_path)",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
              </foreignObject>

              <g
                filter="url(#filter0_ddd_23404_1682)"
                data-figma-bg-blur-radius="20"
              >
                <path
                  d="M10 0H20C25.5228 0 30 4.47716 30 10C30 15.5228 25.5228 20 20 20H10V0Z"
                  fill="url(#paint0_linear_23404_1682)"
                  fillOpacity="0.5"
                  shapeRendering="crispEdges"
                />

                <path
                  d="M20 0.25C25.3848 0.25 29.75 4.61523 29.75 10C29.75 15.3848 25.3848 19.75 20 19.75H10.25V0.25H20Z"
                  stroke="url(#paint1_linear_23404_1682)"
                  strokeWidth="0.5"
                  shapeRendering="crispEdges"
                />
              </g>

              <defs>
                <filter
                  id="filter0_ddd_23404_1682"
                  x="-10"
                  y="-20"
                  width="60"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />

                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />

                  <feOffset dy="10" />

                  <feGaussianBlur stdDeviation="5" />

                  <feComposite in2="hardAlpha" operator="out" />

                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />

                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_23404_1682"
                  />

                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />

                  <feOffset dy="4" />

                  <feGaussianBlur stdDeviation="2" />

                  <feComposite in2="hardAlpha" operator="out" />

                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />

                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_23404_1682"
                    result="effect2_dropShadow_23404_1682"
                  />

                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />

                  <feOffset dy="1" />

                  <feComposite in2="hardAlpha" operator="out" />

                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />

                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_23404_1682"
                    result="effect3_dropShadow_23404_1682"
                  />

                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect3_dropShadow_23404_1682"
                    result="shape"
                  />
                </filter>

                <clipPath
                  id="bgblur_0_23404_1682_clip_path"
                  transform="translate(10 20)"
                >
                  <path d="M10 0H20C25.5228 0 30 4.47716 30 10C30 15.5228 25.5228 20 20 20H10V0Z" />
                </clipPath>

                <linearGradient
                  id="paint0_linear_23404_1682"
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.52" />
                </linearGradient>

                <linearGradient
                  id="paint1_linear_23404_1682"
                  x1="11.7143"
                  y1="-5.57016e-06"
                  x2="31.2356"
                  y2="1.2891"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.5" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* SVG 2 */}
            <svg
              width="37"
              height="40"
              viewBox="0 0 37 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg logo-svg-two"
            >
              <foreignObject x="-10" y="-20" width="56.1111" height="60">
                <div
                  style={{
                    backdropFilter: "blur(10px)",
                    clipPath: "url(#bgblur_0_23404_1683_clip_path)",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
              </foreignObject>

              <g
                filter="url(#filter0_ddd_23404_1683)"
                data-figma-bg-blur-radius="20"
              >
                <path
                  d="M26.1111 2.33472C24.4033 0.933306 22.4084 0.0237384 20.0295 0L10 9.99999L20.0295 20C22.4083 19.9762 24.4033 19.041 26.1111 17.6397C26.0697 17.5982 23.3904 15.0121 22.42 14.0446C21.4495 13.0772 19.031 10.7255 18.3031 10C18.3031 10 26.0697 2.37619 26.1111 2.33472Z"
                  fill="url(#paint0_linear_23404_1683)"
                  fillOpacity="0.5"
                  shapeRendering="crispEdges"
                />

                <path
                  d="M20.1289 0.25293C22.2956 0.298431 24.135 1.10142 25.7334 2.35449C25.691 2.39615 25.6432 2.44474 25.5889 2.49805C25.3726 2.71045 25.0651 3.01088 24.6982 3.37109C23.9643 4.09165 22.99 5.04932 22.0166 6.00488C21.0432 6.96042 20.0705 7.91453 19.3418 8.62988C18.9775 8.98746 18.6743 9.28565 18.4619 9.49414C18.3557 9.59839 18.2717 9.68049 18.2148 9.73633C18.1866 9.76406 18.165 9.78544 18.1504 9.7998L18.1299 9.82031L18.1279 9.82129L17.9473 9.99902L18.127 10.1768C18.4919 10.5405 19.2794 11.3114 20.0957 12.1104C20.9129 12.9102 21.7589 13.739 22.2432 14.2217C22.7298 14.7068 23.6435 15.5968 24.4395 16.3691C24.8377 16.7555 25.2073 17.1125 25.4795 17.376C25.5774 17.4707 25.6629 17.5528 25.7324 17.6201C24.1327 18.8759 22.2937 19.6999 20.1289 19.7461L10.3535 10L20.1289 0.25293Z"
                  stroke="url(#paint1_linear_23404_1683)"
                  strokeWidth="0.5"
                  shapeRendering="crispEdges"
                />
              </g>

              <defs>
                <filter
                  id="filter0_ddd_23404_1683"
                  x="-10"
                  y="-20"
                  width="56.1111"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />

                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />

                  <feOffset dy="10" />

                  <feGaussianBlur stdDeviation="5" />

                  <feComposite in2="hardAlpha" operator="out" />

                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />

                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_23404_1683"
                  />

                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />

                  <feOffset dy="4" />

                  <feGaussianBlur stdDeviation="2" />

                  <feComposite in2="hardAlpha" operator="out" />

                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />

                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_23404_1683"
                    result="effect2_dropShadow_23404_1683"
                  />

                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />

                  <feOffset dy="1" />

                  <feComposite in2="hardAlpha" operator="out" />

                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />

                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_23404_1683"
                    result="effect3_dropShadow_23404_1683"
                  />

                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect3_dropShadow_23404_1683"
                    result="shape"
                  />
                </filter>

                <clipPath
                  id="bgblur_0_23404_1683_clip_path"
                  transform="translate(10 20)"
                >
                  <path d="M26.1111 2.33472C24.4033 0.933306 22.4084 0.0237384 20.0295 0L10 9.99999L20.0295 20C22.4083 19.9762 24.4033 19.041 26.1111 17.6397C26.0697 17.5982 23.3904 15.0121 22.42 14.0446C21.4495 13.0772 19.031 10.7255 18.3031 10C18.3031 10 26.0697 2.37619 26.1111 2.33472Z" />
                </clipPath>

                <linearGradient
                  id="paint0_linear_23404_1683"
                  x1="18.0556"
                  y1="0"
                  x2="18.0556"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.52" />
                </linearGradient>

                <linearGradient
                  id="paint1_linear_23404_1683"
                  x1="11.381"
                  y1="-5.57016e-06"
                  x2="27.1305"
                  y2="0.837796"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.5" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="brand-name">DesignCode UI</p>
        </div>

        <div className="nav-links">
          <button>Components</button>
          <button>Pricing</button>
          <button>Changelog</button>
        </div>
      </div>

      <div className="nav-actions">
        <button>Log in</button>

        <button className="buy-button">Buy now</button>
      </div>
    </nav>
  );
}
