import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineDocker } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";






const ts = <img src="/ts.png" className="w-13 h-11" alt="" />
const react = <FaReact className=" text-5xl text-sky-600 font-bold " />

const next = <img src="/next.png" className="w-15 h-12 pt-1" alt="" />
const node = <IoLogoNodejs className="text-5xl text-lime-200 rounded-xl border bg-green-700 " />

const git = <FaGitAlt className=" text-5xl text-orange-500  font-bold " />

const tailwind = <RiTailwindCssFill className="text-5xl text-sky-600 font-bold " />

const prisma = <SiPrisma className="text-4xl text-black " /> 

const mongodb = <img src="/mongodb.png" className="w-13 h-11" alt="" />
const redux = <TbBrandRedux className="text-5xl text-violet-600 " />;

const shadcn = <h1 className="text-xl text-black">@shadcn/ui </h1>
const docker = <h1><AiOutlineDocker className="text-5xl text-blue-600 " />
</h1>
const k8s = <img src="/k8s.png" className="w-13 h-11" alt="" />
const webrtc = <img src="/webrtc.png" className="w-13 h-11" alt="" />
const cicd = <img src="/cicd.png" className="w-13 h-11" alt="" />
const trpc = <img src="/trpc.png" className="w-13 h-11" alt="" />
const express = <SiExpress className="text-4xl text-sky-900 " />

const postgres = <BiLogoPostgresql className="text-5xl text-sky-900 " />

const python = <img src="/python.png" className="w-13 h-11" alt="" />
const langchain = <h1 className="flex">Langchain 🔗<img src="/bird.png" className="w-7 h-7" /> </h1>

const query = <div><h1 className="flex items-center justify-center"><svg width="56px" height="40px" viewBox="0 0 256 230" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
<title>React Query</title>
<g>
    <path d="M157.980086,142.487022 L153.069644,151.013778 C151.590359,153.58242 148.851879,155.165468 145.887725,155.165468 L108.270548,155.165468 C105.306395,155.165468 102.567914,153.58242 101.088629,151.013778 L96.1777266,142.487022 L157.980086,142.487022 Z M171.727194,118.616863 L163.068777,133.650878 L91.0890359,133.650878 L82.4310791,118.616863 L171.727194,118.616863 Z M163.386935,95.2748201 L171.741007,109.78118 L82.4172662,109.78118 L90.7713381,95.2748201 L163.386935,95.2748201 Z M145.887725,73.2086331 C148.851879,73.2086331 151.590359,74.7916804 153.069644,77.3603227 L158.298245,86.4386762 L95.8600287,86.4386762 L101.088629,77.3603227 C102.567914,74.7916804 105.306395,73.2086331 108.270548,73.2086331 L145.887725,73.2086331 Z" fill="#00435B"></path>
    <path d="M53.5228243,69.2519666 C49.3557543,49.046027 48.4614888,33.5482436 51.1550425,22.2946934 C52.7570141,15.6017254 55.6858056,10.1416955 60.1392594,6.20237896 C64.8409457,2.0434872 70.7853914,0.00271399669 77.464599,0.00271399669 C88.4833026,0.00271399669 100.066708,5.02738845 112.445608,14.5729445 C117.494731,18.4663991 122.735073,23.1593458 128.177383,28.6544179 C128.610547,28.0967615 129.100183,27.5707574 129.645716,27.0846114 C145.032058,13.3732532 157.986014,4.85421104 169.065645,1.56952494 C175.653591,-0.383548437 181.838857,-0.569619914 187.471409,1.32590625 C193.416935,3.32675759 198.15432,7.46280771 201.496675,13.2560937 C207.012767,22.8171061 208.467426,35.3803455 206.410907,50.8927245 C205.572649,57.2157177 204.139587,64.103296 202.114822,71.5660814 C202.878713,71.6583298 203.644518,71.8277005 204.402582,72.078912 C223.924455,78.5481835 237.747984,85.5050986 246.117081,93.455615 C251.09648,98.1859692 254.348089,103.452282 255.523523,109.281738 C256.764195,115.434739 255.554443,121.606357 252.21598,127.395333 C246.710179,136.942525 236.586635,144.472296 222.164328,150.436421 C216.37329,152.831216 209.821074,155.000103 202.500392,156.950715 C202.834427,157.704922 203.093586,158.505888 203.266881,159.346186 C207.433951,179.552126 208.328217,195.049909 205.634663,206.303459 C204.032691,212.996427 201.1039,218.456457 196.650446,222.395774 C191.94876,226.554666 186.004314,228.595439 179.325107,228.595439 C168.306403,228.595439 156.722997,223.570764 144.344098,214.025209 C139.241235,210.090314 133.943061,205.338818 128.438479,199.768003 C127.872101,200.653965 127.176715,201.477453 126.354284,202.210353 C110.967942,215.921711 98.0139856,224.440753 86.9343548,227.725439 C80.3464094,229.678512 74.1611432,229.864584 68.5285912,227.969058 C62.5830653,225.968206 57.8456799,221.832156 54.5033245,216.03887 C48.9872327,206.477858 47.5325739,193.914618 49.5890933,178.402239 C50.4576511,171.850687 51.9647931,164.692994 54.1070674,156.917346 C53.2696983,156.832501 52.4289017,156.65542 51.5974183,156.379879 C32.0755448,149.910607 18.2520163,142.953692 9.88291895,135.003176 C4.90351995,130.272821 1.65191076,125.006509 0.476476948,119.177053 C-0.76419548,113.024052 0.445556656,106.852434 3.78402002,101.063457 C9.28982045,91.5162659 19.4133646,83.9864941 33.8356726,78.0223691 C39.7992613,75.556218 46.5700659,73.3296382 54.1560449,71.3342936 C53.8857623,70.6726423 53.6723366,69.9769434 53.5228243,69.2519666 Z" fill="#002B3B"></path>
    <path d="M189.647082,161.332552 C191.588117,160.988559 193.448154,162.232965 193.881519,164.142164 L193.905355,164.25523 L194.112185,165.329619 C200.82206,200.606276 196.095493,218.244604 179.932483,218.244604 C164.118603,218.244604 143.987753,203.193799 119.539933,173.09219 C118.999764,172.427101 118.70835,171.594508 118.715576,170.737729 C118.733331,168.741874 120.335,167.130688 122.316684,167.087425 L122.431425,167.086678 L123.718886,167.095808 C134.00664,167.151581 144.007879,166.792879 153.722602,166.019701 C165.1903,165.107007 177.165126,163.544623 189.647082,161.332552 Z M78.6458633,134.666898 L78.7078446,134.771519 L79.3538232,135.898918 C84.5306616,144.89904 89.9242479,153.441244 95.5345809,161.52553 C102.141724,171.04618 109.571769,180.684341 117.824717,190.440012 C119.101455,191.949222 118.955699,194.189372 117.515334,195.521636 L117.421639,195.605425 L116.591258,196.320149 C89.2852865,219.716955 71.5374632,224.387736 63.3477884,210.332492 C55.3313515,196.574563 58.2377577,171.558816 72.0670066,135.285251 C72.3708961,134.488162 72.9420247,133.821259 73.6828929,133.398394 C75.4143371,132.410139 77.6096238,132.980798 78.6458633,134.666898 Z M203.503403,82.6131343 L203.615296,82.6495484 L204.643048,83.0044846 C238.347807,94.729024 251.153123,107.613829 243.058996,121.658899 C235.142689,135.395415 212.128983,145.396769 174.017881,151.66296 C173.167999,151.802697 172.296021,151.640191 171.553528,151.203694 C169.79981,150.172718 169.213912,147.915277 170.244889,146.16156 C175.703461,136.876387 180.619696,127.637538 184.993594,118.445014 C189.954111,108.019605 194.609306,96.8294082 198.959178,84.8744237 C199.618683,83.061871 201.556008,82.0774197 203.391185,82.580471 L203.503403,82.6131343 Z M84.4464723,76.7099745 C86.2001901,77.740951 86.7860876,79.9983917 85.7551111,81.7521091 C80.2965391,91.0372816 75.3803041,100.27613 71.006406,109.468655 C66.0458889,119.894064 61.3906942,131.084261 57.0408219,143.039245 C56.3678577,144.888789 54.3643854,145.876086 52.4965968,145.300535 L52.384704,145.264121 L51.3569514,144.909184 C17.6521928,133.184645 4.84687687,120.29984 12.9410033,106.25477 C20.8573114,92.5182536 43.8710165,82.5168999 81.9821186,76.2507092 C82.8320004,76.1109723 83.7039793,76.2734775 84.4464723,76.7099745 Z M192.652212,18.9624716 C200.668648,32.7204007 197.762242,57.7361478 183.932993,94.0097128 C183.629104,94.8068024 183.057975,95.4737045 182.317107,95.8965695 C180.585663,96.8848251 178.390376,96.3141662 177.354137,94.6280655 L177.292155,94.5234449 L176.646177,93.396046 C171.469338,84.3959235 166.075752,75.8537196 160.465419,67.7694342 C153.858276,58.2487836 146.428231,48.6106226 138.175283,38.8549521 C136.898545,37.3457421 137.044301,35.1055922 138.484666,33.7733281 L138.578361,33.6895387 L139.408742,32.9748146 C166.714713,9.5780092 184.462537,4.90722821 192.652212,18.9624716 Z M77.4488122,10.5899281 C93.2626919,10.5899281 113.393541,25.6407329 137.841362,55.7423424 C138.381531,56.4074313 138.672945,57.2400244 138.665719,58.0968034 C138.647964,60.0926579 137.046295,61.7038447 135.064611,61.7471068 L134.94987,61.7478547 L133.662408,61.7387247 C123.374654,61.6829511 113.373416,62.0416532 103.658693,62.8148314 C92.1909953,63.7275257 80.2161685,65.2899089 67.7342126,67.5019801 C65.7931775,67.8459735 63.933141,66.601567 63.4997758,64.6923678 L63.4759394,64.5793022 L63.2691102,63.5049136 C56.5592347,28.2282565 61.285802,10.5899281 77.4488122,10.5899281 Z" fill="#FF4154"></path>
    <g transform="translate(80.575540, 73.669065)" fill="#FFD94C">
        <path d="M30.7189861,-1.39989681e-23 L62.2949309,-1.39989681e-23 C66.9127505,-1.39989681e-23 71.1778947,2.46984572 73.4764482,6.47495629 L89.3310931,34.1008556 C91.6118515,38.0749594 91.6118515,42.9610118 89.3310931,46.9351155 L73.4764482,74.5610148 C71.1778947,78.5661256 66.9127505,81.0359712 62.2949309,81.0359712 L30.7189861,81.0359712 C26.1011664,81.0359712 21.8360221,78.5661256 19.5374686,74.5610148 L3.68282375,46.9351155 C1.40206522,42.9610118 1.40206522,38.0749594 3.68282375,34.1008556 L19.5374686,6.47495629 C21.8360221,2.46984572 26.1011664,-1.39989681e-23 30.7189861,-1.39989681e-23 Z M57.4824555,8.33810638 C62.102714,8.33810638 66.369722,10.8105395 68.667368,14.818982 L79.7231631,34.106775 C81.999395,38.0778585 81.999395,42.9581127 79.7231631,46.9291962 L68.667368,66.216989 C66.369722,70.2254319 62.102714,72.6978647 57.4824555,72.6978647 L35.5314612,72.6978647 C30.9112026,72.6978647 26.6441947,70.2254319 24.3465487,66.216989 L13.2907533,46.9291962 C11.0145216,42.9581127 11.0145216,38.0778585 13.2907533,34.106775 L24.3465487,14.818982 C26.6441947,10.8105395 30.9112026,8.33810638 35.5314612,8.33810638 L57.4824555,8.33810638 Z M52.295383,17.4579102 L40.7185336,17.4579102 C36.1030177,17.4579102 31.8396344,19.925313 29.5402263,23.9272762 L29.5402263,23.9272762 L23.6980045,34.0952652 C21.4129658,38.0722196 21.4129658,42.9637516 23.6980045,46.9407061 L23.6980045,46.9407061 L29.5402263,57.108695 C31.8396344,61.1106583 36.1030177,63.5780609 40.7185336,63.5780609 L40.7185336,63.5780609 L52.295383,63.5780609 C56.9108991,63.5780609 61.1742821,61.1106583 63.4736902,57.108695 L63.4736902,57.108695 L69.3159123,46.9407061 C71.6009508,42.9637516 71.6009508,38.0722196 69.3159123,34.0952652 L69.3159123,34.0952652 L63.4736902,23.9272762 C61.1742821,19.925313 56.9108991,17.4579102 52.295383,17.4579102 L52.295383,17.4579102 Z M47.3007539,26.1868653 C51.9128126,26.1868653 56.1735523,28.6506045 58.4742386,32.6478447 L59.3025013,34.0868787 C61.5939706,38.0681056 61.5939706,42.9678656 59.3025013,46.9490924 L58.4742386,48.3881264 C56.1735523,52.3853665 51.9128126,54.8491059 47.3007539,54.8491059 L45.7131627,54.8491059 C41.101104,54.8491059 36.8403644,52.3853665 34.5396783,48.3881264 L33.7114156,46.9490924 C31.4199463,42.9678656 31.4199463,38.0681056 33.7114156,34.0868787 L34.5396783,32.6478447 C36.8403644,28.6506045 41.101104,26.1868653 45.7131627,26.1868653 L47.3007539,26.1868653 Z M46.5090408,34.7855375 C44.4563249,34.7855375 42.5632677,35.8780363 41.5383478,37.6517615 C40.5136007,39.4251878 40.5136007,41.6107834 41.5383478,43.3842097 C42.5632677,45.1579349 44.4563249,46.2504338 46.5048762,46.2504338 L46.5048762,46.2504338 C48.5575919,46.2504338 50.4506488,45.1579349 51.4755688,43.3842097 C52.5003161,41.6107834 52.5003161,39.4251878 51.4755688,37.6517615 C50.4506488,35.8780363 48.5575919,34.7855375 46.5090408,34.7855375 L46.5090408,34.7855375 Z M2.01124849e-22,40.5179856 L10.3208271,40.5179856"></path>
    </g>
</g>
</svg>React Query</h1></div>

export const skillsData = [
  ts,
  react,
 next,
 shadcn,
 tailwind,
 query,
 prisma,
 postgres,
  node,
  git,
  mongodb,
   docker,
  express,
  redux,
  python,
  langchain,
 
] as const;


export const FluxSkillsData = [
  ts,
 next,
 tailwind,
 query,
 prisma,
 postgres,


 
] as const;
