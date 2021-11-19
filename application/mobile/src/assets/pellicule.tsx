import React from "react";
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg width="161px" height="147px" viewBox="0 0 161 147" {...props}>
    <Defs>
      <Path id="a" d="M0 146.732L160.051 146.732 160.051 0 0 0z" />
    </Defs>
    <G
      transform="translate(-128 -253) translate(128 253)"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <Path
        d="M56.225 2.5c1.375 0 2.5 1.836 2.5 4.07v11.232c0 2.243-1.125 4.07-2.5 4.07H33.804c-1.376 0-2.501-1.827-2.501-4.07V6.57c0-2.235 1.125-4.071 2.5-4.071h22.422z"
        fill="#F27153"
      />
      <Path
        d="M56.225 2.5c1.375 0 2.5 1.836 2.5 4.07v11.232c0 2.243-1.125 4.07-2.5 4.07H33.804c-1.376 0-2.501-1.827-2.501-4.07V6.57c0-2.235 1.125-4.071 2.5-4.071h22.422z"
        stroke="#000"
        strokeWidth={5}
      />
      <Path
        d="M85.028 14.19a2.508 2.508 0 012.5 2.5v10.003a2.51 2.51 0 01-2.5 2.501H5a2.508 2.508 0 01-2.5-2.5V16.69a2.508 2.508 0 012.5-2.5h80.027z"
        fill="#AED7E6"
      />
      <Path
        d="M85.028 14.19a2.508 2.508 0 012.5 2.5v10.003a2.51 2.51 0 01-2.5 2.501H5a2.508 2.508 0 01-2.5-2.5V16.69a2.508 2.508 0 012.5-2.5h80.027z"
        stroke="#000"
        strokeWidth={5}
      />
      <Mask id="b" fill="#fff">
        <Use xlinkHref="#a" />
      </Mask>
      <Path
        fill="#F7C42F"
        mask="url(#b)"
        d="M5.001 129.227L85.027 129.227 85.027 29.194 5.001 29.194z"
      />
      <Path
        stroke="#000"
        strokeWidth={5}
        mask="url(#b)"
        d="M5.001 129.227L85.027 129.227 85.027 29.194 5.001 29.194z"
      />
      <Path
        d="M85.028 129.227a2.508 2.508 0 012.5 2.5v10.004a2.51 2.51 0 01-2.5 2.501H5a2.508 2.508 0 01-2.5-2.5v-10.005c0-1.375 1.125-2.5 2.5-2.5h80.027z"
        fill="#AED7E6"
        mask="url(#b)"
      />
      <Path
        d="M85.028 129.227a2.508 2.508 0 012.5 2.5v10.004a2.51 2.51 0 01-2.5 2.501H5a2.508 2.508 0 01-2.5-2.5v-10.005c0-1.375 1.125-2.5 2.5-2.5h80.027z"
        stroke="#000"
        strokeWidth={5}
        mask="url(#b)"
      />
      <Path
        d="M87.528 29.194h65.02a5 5 0 015.002 5.001v60.02a4.984 4.984 0 01-5.002 5.002c-13.828 0-25.007 11.179-25.007 25.008a4.985 4.985 0 01-5.001 5.002H85.028V29.194h2.5z"
        fill="#FFBDCB"
        mask="url(#b)"
      />
      <Path
        d="M87.528 29.194h65.02a5 5 0 015.002 5.001v60.02a4.984 4.984 0 01-5.002 5.002c-13.828 0-25.007 11.179-25.007 25.008a4.985 4.985 0 01-5.001 5.002H85.028V29.194h2.5z"
        stroke="#000"
        strokeWidth={5}
        mask="url(#b)"
      />
      <Path
        d="M100.457 47.78h-2.646a1.367 1.367 0 01-1.366-1.367v-5.334c0-.755.613-1.366 1.366-1.366h2.646c.755 0 1.366.611 1.366 1.366v5.334c0 .755-.61 1.367-1.366 1.367M115.13 47.78h-2.646a1.367 1.367 0 01-1.366-1.367v-5.334c0-.755.612-1.366 1.366-1.366h2.646c.755 0 1.366.611 1.366 1.366v5.334c0 .755-.61 1.367-1.366 1.367M100.457 118.474h-2.646a1.367 1.367 0 01-1.366-1.367v-5.334c0-.755.613-1.366 1.366-1.366h2.646c.755 0 1.366.61 1.366 1.366v5.334c0 .755-.61 1.367-1.366 1.367M115.13 118.474h-2.646a1.367 1.367 0 01-1.366-1.367v-5.334c0-.755.612-1.366 1.366-1.366h2.646c.755 0 1.366.61 1.366 1.366v5.334c0 .755-.61 1.367-1.366 1.367M129.803 47.78h-2.645a1.367 1.367 0 01-1.367-1.367v-5.334c0-.755.612-1.366 1.367-1.366h2.645c.755 0 1.366.611 1.366 1.366v5.334c0 .755-.611 1.367-1.366 1.367M144.476 47.78h-2.646a1.367 1.367 0 01-1.366-1.367v-5.334c0-.755.612-1.366 1.366-1.366h2.646c.754 0 1.366.611 1.366 1.366v5.334c0 .755-.612 1.367-1.366 1.367M40.733 105.518c.313.02 1.733.062 2.507.062 1.357 0 2.068-.041 2.38-.104.419-.104.649-.626.649-1.42 0-.773-.293-1.672-.731-2.215-.44-.543-1.317-.92-2.131-.92-1.128 0-2.111.46-2.695 1.275-.522.69-.835 1.505-.835 2.173 0 .73.27 1.086.856 1.149zm11.385 3.802c0 .898-.188 1.212-.71 1.212-.398 0-.627-.21-.794-.69-.167-.543-.292-.647-.71-.69-.67-.062-2.006-.104-3.468-.104h-4.68c-1.587 0-1.984.147-2.151.794-.146.48-.355.669-.711.669-.668 0-.814-.543-.814-2.78 0-3.863.25-5.848.919-7.352.564-1.295 1.316-2.215 2.235-2.778.815-.502 1.817-.794 2.695-.794 2.027 0 3.447 1.316 3.844 3.572.209 1.086.272 2.152.25 4.324 0 .773.022.794 1.338.794 1.044 0 1.21-.083 1.337-.647.145-.523.334-.711.73-.711.523 0 .69.272.69 1.212v3.969zM46.603 90.727c-.21-.438-.334-.585-.48-.585-.251 0-.857.272-1.275.585-.501.355-.814.92-.814 1.441 0 .9.689 1.463 1.755 1.463.897 0 1.795-.293 1.795-.606 0-.084-.042-.188-.125-.376l-.856-1.922zm2.068 1.922c1.21-.522 1.88-1.504 1.88-2.757 0-.92-.438-1.943-1.15-2.654-.333-.334-.416-.459-.416-.626 0-.272.208-.46.5-.46.377 0 .92.397 1.358.982.899 1.15 1.42 2.737 1.42 4.241 0 2.945-1.941 5.013-4.741 5.013-2.674 0-4.847-2.256-4.847-5.034 0-1.42.607-2.716 1.672-3.614.522-.439 1.316-.878 1.587-.878.105 0 .147.084.314.418l.188.376c.125.272.209.44.229.502l2.006 4.491z"
        fill="#000"
        mask="url(#b)"
      />
      <Path
        d="M47.793 82.12c1.191 0 2.09-.041 2.402-.124.356-.105.418-.167.648-.627.167-.355.376-.522.627-.522.46 0 .647.313.647 1.003v3.342c0 .689-.187 1.002-.627 1.002-.27 0-.48-.167-.647-.522-.23-.48-.334-.564-.752-.648-.314-.062-1.19-.104-2.298-.104h-4.742c-.982 0-1.378.042-1.629.146-.167.084-.167.105-.418.732-.084.229-.25.355-.48.355-.314 0-.46-.126-.774-.711l-1.378-2.486a.856.856 0 01-.126-.397c0-.313.272-.438.961-.438h8.586zM47.793 76.25c1.191 0 2.09-.041 2.402-.124.356-.105.418-.167.648-.627.167-.355.376-.522.627-.522.46 0 .647.313.647 1.003v3.342c0 .689-.187 1.002-.627 1.002-.27 0-.48-.167-.647-.522-.23-.48-.334-.564-.752-.648-.314-.062-1.19-.104-2.298-.104h-4.742c-.982 0-1.378.042-1.629.146-.167.084-.167.105-.418.73-.084.23-.25.357-.48.357-.314 0-.46-.126-.774-.711l-1.378-2.486a.856.856 0 01-.126-.397c0-.313.272-.438.961-.438h8.586zM39.918 70.401c.376 0 .752.25 1.044.71.376.585.606 1.233.606 1.755a.946.946 0 01-.96.962c-.398 0-.732-.21-1.045-.69-.397-.585-.627-1.212-.627-1.735 0-.605.397-1.002.982-1.002zm7.875-.02c2.57 0 2.716-.041 3.05-.752.167-.335.376-.502.627-.502.46 0 .647.314.647 1.002v3.322c0 .69-.187 1.003-.627 1.003-.27 0-.48-.166-.647-.522-.23-.48-.334-.564-.752-.648-.314-.063-1.19-.105-2.298-.105H46.31c-.376 0-.71.043-.877.084-.147.063-.189.105-.293.397-.146.398-.313.565-.564.565-.293 0-.418-.126-.627-.585l-1.107-2.466c-.083-.209-.125-.355-.125-.48 0-.23.188-.314.69-.314h4.386zM49.904 58.912c.48-.271.71-.543.834-.898.21-.585.419-.773.773-.773.377 0 .606.334.606.919v1.984c-.02.293-.041.46-.041.502-.022.23-.041.292-.23.418-.167.083-.334.146-.48.229l-3.07 1.546c-.46.25-.585.314-.9.565a.545.545 0 00-.145.083l1.294 1.107c.146.02.271.02.335.02.438 0 1.106-.062 1.316-.124.355-.084.48-.21.647-.627.146-.355.334-.522.626-.522.419 0 .648.334.648.94v3.342c0 .689-.188 1.003-.648 1.003-.25 0-.46-.167-.627-.522-.228-.481-.334-.565-.752-.648-.313-.063-1.19-.105-2.318-.105h-4.866c-1.713 0-1.713 0-1.901.732-.105.417-.293.626-.544.626-.271 0-.48-.146-.648-.48l-1.505-2.82c-.102-.188-.166-.355-.166-.46 0-.25.208-.355.648-.355h7.666L44.91 63.09c-.188-.167-.417-.292-.584-.292-.168 0-.25.104-.355.417-.084.272-.23.397-.502.397-.334 0-.563-.271-.563-.668v-3.238c0-.564.187-.836.584-.836a.66.66 0 01.521.25c.105.168.105.168.356.94.21.544.502.92.962 1.233l4.575-2.381zM45.788 54.818c2.381 0 5.014-1.838 5.014-3.49 0-1.002-.71-1.65-1.797-1.65-2.298 0-5.139 2.006-5.139 3.636 0 .898.773 1.504 1.922 1.504m2.172-8.147c2.528 0 4.304 2.318 4.304 5.64 0 3.28-1.797 5.285-4.743 5.285-1.462 0-2.673-.522-3.572-1.567-.877-1.023-1.315-2.214-1.315-3.572 0-3.196 2.381-5.786 5.326-5.786"
        fill="#000"
        mask="url(#b)"
      />
    </G>
  </Svg>
);

export default SvgComponent;