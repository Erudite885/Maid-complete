// import { brickWall } from '../assets/projectSvg/projectSvg'
// import {  cleaningSprayBottle, } from '../assets/projectSvg/cleaningSprayBottle'
// import { closet } from "../assets/projectSvg/closet";
// import { fridge } from '../assets/projectSvg/fridge'
// import { moversIcon } from '../assets/projectSvg/moversIcon'
// import { ovenWithStove } from "../assets/projectSvg/ovenWithStove";
// import window from '../assets/projectSvg/window.svg'
// import moversIcon from '../assets/moversIcon.svg'
// import { FaPumpSoap } from "react-icons/fa";
import { GiBrickWall, GiSoap } from 'react-icons/gi'
import { BiCabinet } from 'react-icons/bi'
import { MdPets, MdWindow } from 'react-icons/md'
import { RiFridgeFill } from "react-icons/ri";
import style from './form/form.module.css'

export const DUMMYITEMS = [
  {
    id: "b1",
    name: "1 Bedroom",
    price: 120,
  },
  {
    id: "b2",
    name: "2 Bedrooms",
    price: 130,
  },
  {
    id: "b3",
    name: "3 Bedrooms",
    price: 140,
  },
  {
    id: "b4",
    name: "4 Bedrooms",
    price: 150,
  },
 
];

export const DUMMYITEMSTWO = [
  {
    id: "b1",
    label: "1 Bathroom",
    price: 15,
  },
  {
    id: "b2",
    label: "2 Bathrooms",
    price: 30,
  },
  {
    id: "b3",
    label: "3 Bathrooms",
    price: 45,
  },
  {
    id: "b4",
    label: "4 Bathrooms",
    price: 60,
  },
  {
    id: "b5",
    label: "5 Bathrooms",
    price: 75,
  },
  {
    id: "b6",
    label: "6 Bathrooms",
    price: 90,
  },
  {
    id: "b7",
    label: "7 Bathrooms",
    price: 105,
  },
  {
    id: "b8",
    label: "8 Bathrooms",
    price: 120,
  },
];

export const DUMMYITEMSTHREE = [
  {
    id: 10,
    name: "deep cleaning",
    price: 59.0,
    img: <GiSoap />,
  },
  {
    id: 7,
    name: "clean inside kitchen cabinets",
    price: 30.0,
    img: <BiCabinet />,
  },
  {
    id: 5,
    name: "finished basement",
    price: 60.0,
    img: <GiBrickWall />,
  },
  {
    id: 11,
    name: "we have pets",
    price: 10.0,
    img: <MdPets />,
  },
  {
    id: 4,
    name: "clean inside windows",
    price: 60.0,
    img: <MdWindow />,
  },
  {
    id: 1,
    name: "inside fridge",
    price: 25.0,
    img: <RiFridgeFill />,
  },
  {
    id: 2,
    name: "inside oven",
    price: 25.0,
    img: (
      <svg
        className={style.dummySvg}
        width="55px"
        height="55px"
        viewBox="-4.79 0 55 55"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="_2" data-name="2" transform="translate(-172.285 -128)">
          <g id="Group_26" data-name="Group 26">
            <path
              id="Path_227"
              data-name="Path 227"
              d="M176.438,130.006l-.008-1.974,17.924-.011.006,1.941-.81,0,0-1.153-16.26.016-.053.075c-.02.373.045.64.025,1.077Z"
            />
            <path
              id="Path_228"
              data-name="Path 228"
              d="M196.38,129.982l0-1.078.074-.106h14.937l1.355.048,0,1.131.821-.036c.019-.693-.068-1.28-.04-1.941l-17.945.011.007,1.973Z"
            />
          </g>
          <g id="Group_27" data-name="Group 27">
            <path
              id="Path_229"
              data-name="Path 229"
              d="M172.285,131.328v7.551h45.43v-7.551Zm5.955,6.3a2.515,2.515,0,0,1-2.034-4.006l3.165,3.729A2.507,2.507,0,0,1,178.24,137.627Zm2.016-1.019-3.171-3.736a2.51,2.51,0,0,1,3.171,3.736Zm7.183,1.019a2.515,2.515,0,0,1-2.034-4.006l3.163,3.729A2.5,2.5,0,0,1,187.439,137.627Zm2.015-1.019-3.169-3.736a2.494,2.494,0,0,1,1.154-.293,2.524,2.524,0,0,1,2.524,2.525A2.5,2.5,0,0,1,189.454,136.608Zm7.183,1.019a2.516,2.516,0,0,1-2.035-4.006l3.165,3.729A2.5,2.5,0,0,1,196.637,137.627Zm2.015-1.019-3.171-3.736a2.51,2.51,0,0,1,3.171,3.736Zm7.184,1.019a2.515,2.515,0,0,1-2.035-4.006l3.164,3.729A2.5,2.5,0,0,1,205.836,137.627Zm2.015-1.019-3.17-3.736a2.5,2.5,0,0,1,1.155-.293,2.524,2.524,0,0,1,2.524,2.525A2.5,2.5,0,0,1,207.851,136.608Zm7.407,1.019h-2.524v-4.71h2.524Z"
            />
          </g>
          <rect
            id="Rectangle_79"
            data-name="Rectangle 79"
            width="31.044"
            height="2.02"
            transform="translate(179.478 148.916)"
          />
          <path
            id="Path_230"
            data-name="Path 230"
            d="M217.715,183h-45.43V139.841h45.43Zm-4-7.626V145.959l-37.46.007v29.409Z"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 13,
    name: "move-in/out",
    price: 69.0,
    img: (
      <svg
        className={style.dummySvg}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.88 72.06"
      >
        <path
          class="cls-1"
          d="M48.79,31.83A1.29,1.29,0,1,0,50,33.11a1.23,1.23,0,0,0-1.17-1.28Z"
        />
        <path
          class="cls-2"
          d="M98.22,61.09a8.75,8.75,0,0,0-.1,1.37,9.61,9.61,0,1,0,19.06-1.71,5.87,5.87,0,0,0,5.7-5.82V36.1L110.94,23.25H94.58V51.77H53.21a2.4,2.4,0,0,0-2.44,2.33v4.66a2.39,2.39,0,0,0,2.44,2.32H58A9.47,9.47,0,1,0,76.81,62.6a10.73,10.73,0,0,0-.11-1.51ZM26.16,2.58H22c-.18,0-.27.16-.32.33l-.61,2.21c-.05.17.14.33.31.33h3.11A8.06,8.06,0,0,0,24.13,8,7.71,7.71,0,1,0,39.54,8a7.84,7.84,0,0,0-7.7-8,7.56,7.56,0,0,0-5.68,2.58Zm-21,11.79v9.87A5.23,5.23,0,0,0,3.28,27L0,25,.1,11.21l5,3.16Zm2.1-4.48,5,2.82-6.47.83L1.18,10.68l6-.79ZM6.14,23.62v-9.1l6.74-.86.22,6.44,2.37-1.61,2.37,1.34-.49-6.74,4-.47v4.86a12.41,12.41,0,0,0-3.79,3.39c-.48.56-1,1.13-1.42,1.58a1.37,1.37,0,0,0-.17.17c-1,1.24-4.59.91-6.85.7-.92-.08,1.18.1-.47-.05a4.52,4.52,0,0,0-2.55.35ZM16.72,12.13,11.89,9.27l2-.2L20,11.76l-3.31.37ZM38.91,41.47l1.43,9.94,9.71-6.33V21.38a3,3,0,0,1,3-3H88.82a3,3,0,0,1,3,3v28H53.93l-33,21.07H11.08l11.58-7.54a3.68,3.68,0,0,1-.07-1.49l1-10.85,1-11c-1.6-4.29-.19-7.14-.29-12.18-2.87,2.88-5.09,5-9.45,5.14-1.38,0-3.58-.16-5-.31C8.16,32,7,32.11,5.92,30.59c-1.65-2.4.53-5.16,2.67-4.71,2.42.21,6.77.76,8.42-1.27,1.7-1.63,3-3.9,5.24-4.63C34.77,15.92,37.88,17.51,39,22a127.41,127.41,0,0,1,.57,13.6,27.87,27.87,0,0,1-.62,5.88ZM33.33,56a3.54,3.54,0,0,1-.22-.76L31.84,43.36,30.56,57.78,33.33,56ZM63.7,62.61a3.64,3.64,0,1,0,7.28,0,3.64,3.64,0,0,0-7.28,0ZM111,60.77l0-.06,0-.06,0,0v0l0-.05h0l0,0v0l0,0a.91.91,0,0,1-.11-.16l0,0v0l0,0,0,0,0,0,0,0h0l-.12-.13,0,0h0l0,0v0l0,0,0,0,0,0,0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0h0l0,0h0l0,0,0,0h0l-.05,0h0l0,0,0,0h0l-.06,0h0l-.06,0h0l0,0,0,0h0l-.06,0h0l0,0h-.06L109,59h0l0,0h0l0,0h-.06l-.06,0h-.05l0,0h-.08l-.06,0h-1.44l-.09,0h-.09l-.07,0h0l-.07,0h0l-.06,0h0l-.05,0h-.07l-.06,0h0l-.06,0h0l0,0-.06,0h0l-.06,0h0l0,0,0,0h0l-.06,0h0l0,0,0,0h0l-.08,0h0l-.05,0,0,0,0,0,0,0h0l0,0h0l0,0,0,0h0l0,0h0l-.05,0,0,0,0,0,0,0h0l0,0,0,0,0,0,0,0h0l0,.05h0l0,0,0,0h0l0,0h0l0,0,0,0,0,0,0,.05h0l0,0,0,0,0,0,0,0h0l0,0h0l0,0,0,0h0l0,0,0,.07,0,0v0l0,0h0l0,.05v0l0,0h0l0,0,0,.06a3.55,3.55,0,0,0-.41,1.69,3.69,3.69,0,1,0,7-1.68Zm-.12-32,6,7.17v2.62H100.57V28.8Z"
        />
      </svg>
    ),
  },
];
console.log(DUMMYITEMSTHREE);

export const DUMMYITEMSFOUR = [
  {
    id: 10,
    name: "radio",
    label: "deep cleaning",
    value: 59.0,
    description: "",
  },
  {
    id: 7,
    name: "radio",
    label: "clean inside kitchen cabinets",
    value: 30.0,
    description: "",
  },
  {
    id: 5,
    name: "radio",
    label: "finished basement",
    value: 60.0,
    description: "",
  },
  {
    id: 11,
    name: "radio",
    label: "we have pets",
    value: 10.0,
    description: "",
  },
  {
    id: 4,
    name: "radio",
    label: "clean inside windows",
    value: 61.0,
    description: "",
  },
];
console.log(DUMMYITEMSFOUR);