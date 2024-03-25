import { useContext } from "react";
import { LightMode } from "../Context/Context";

const Lightmode = () => {
  const { lightDark, setLightDark } = useContext(LightMode);

  if (lightDark === false) {
    document.documentElement.style.setProperty("--bg-black", "#040f14");
    document.documentElement.style.setProperty("--font-white", "#ffffff");
    document.documentElement.style.setProperty("--card-bg-blue", "#102130");
    document.documentElement.style.setProperty("--accent-color-magenta", "#ff4654");
    document.documentElement.style.setProperty("--lightBlue", "#afc7df");
    document.documentElement.style.setProperty("--darkBlue", "#375470");
  } else {
    document.documentElement.style.setProperty("--bg-black", "#b7dff1");
    document.documentElement.style.setProperty("--font-white", "#ffffff");
    document.documentElement.style.setProperty("--card-bg-blue", "#2d5e88");
    document.documentElement.style.setProperty("--accent-color-magenta", "#ff828b");
    document.documentElement.style.setProperty("--lightBlue", "#1e344b");
    document.documentElement.style.setProperty("--darkBlue", "#87a6c4");
  }

  return (
    <svg
      onClick={() => setLightDark((lightDark) => !lightDark)}
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1099 19.2953L12.7147 20.0804C12.4845 20.5377 12.3694 20.7664 12.2139 20.84C12.0786 20.904 11.9217 20.904 11.7863 20.84C11.6308 20.7664 11.5157 20.5377 11.2855 20.0804L10.0922 17.7098C9.98171 17.4902 9.92645 17.3804 9.8416 17.3124C9.76683 17.2524 9.6764 17.2152 9.58107 17.2051C9.4729 17.1938 9.35637 17.2328 9.1233 17.311L6.51649 18.1852C6.00872 18.3555 5.75483 18.4406 5.59008 18.3802C5.44682 18.3277 5.33539 18.2126 5.28749 18.0677C5.23242 17.9011 5.32569 17.6501 5.51223 17.148L6.38199 14.8073C6.47347 14.5611 6.51921 14.438 6.50844 14.3241C6.49895 14.2237 6.45938 14.1286 6.3949 14.0512C6.32167 13.9632 6.2021 13.9089 5.96298 13.8003L3.60342 12.7284C3.0941 12.497 2.83945 12.3813 2.76046 12.221C2.69183 12.0817 2.69183 11.9184 2.76046 11.779C2.83945 11.6187 3.09411 11.503 3.60342 11.2716L5.96298 10.1997C6.2021 10.0911 6.32167 10.0368 6.3949 9.94882C6.45938 9.87138 6.49895 9.77627 6.50844 9.67595C6.51921 9.56201 6.47347 9.43891 6.38199 9.19271L5.51223 6.85197C5.32569 6.34994 5.23242 6.09893 5.28749 5.93232C5.33539 5.78744 5.44682 5.67236 5.59008 5.61983C5.75483 5.55942 6.00872 5.64456 6.51649 5.81484L9.1233 6.68903C9.35636 6.76718 9.4729 6.80626 9.58107 6.79488C9.6764 6.78485 9.76683 6.74762 9.8416 6.68765C9.92645 6.61959 9.98171 6.5098 10.0922 6.29023L11.2855 3.9196C11.5157 3.46227 11.6308 3.23361 11.7863 3.16007C11.9217 3.09606 12.0786 3.09606 12.2139 3.16007C12.3694 3.23361 12.4845 3.46227 12.7147 3.9196L13.1099 4.70472M9.76401 10C9.28897 10.5308 9.00012 11.2317 9.00012 12C9.00012 12.7684 9.28897 13.4693 9.76401 14M22.0001 12C22.0001 14.7614 19.7615 17 17.0001 17C14.2387 17 12.0001 14.7614 12.0001 12C12.0001 9.23858 14.2387 7.00001 17.0001 7.00001C19.7615 7.00001 22.0001 9.23858 22.0001 12Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lightmode;
