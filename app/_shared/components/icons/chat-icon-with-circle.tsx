import type { SVGElementPropsType } from '@/_shared/types/types';

export default function ChatIconWithCircle(props: SVGElementPropsType) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4C17.5228 4 22 8.47715 22 14C22 19.5228 17.5228 24 12 24C10.3596 24 8.77516 23.6039 7.35578 22.8583L3.06538 23.9753C2.6111 24.0937 2.1469 23.8213 2.02858 23.367C1.99199 23.2266 1.99198 23.0791 2.02855 22.9386L3.1449 18.6502C2.3972 17.2294 2 15.6428 2 14C2 8.47715 6.47715 4 12 4ZM13.2517 15H8.75L8.64823 15.0068C8.28215 15.0565 8 15.3703 8 15.75C8 16.1297 8.28215 16.4435 8.64823 16.4932L8.75 16.5H13.2517L13.3535 16.4932C13.7196 16.4435 14.0017 16.1297 14.0017 15.75C14.0017 15.3703 13.7196 15.0565 13.3535 15.0068L13.2517 15ZM15.25 11.5H8.75L8.64823 11.5068C8.28215 11.5565 8 11.8703 8 12.25C8 12.6297 8.28215 12.9435 8.64823 12.9932L8.75 13H15.25L15.3518 12.9932C15.7178 12.9435 16 12.6297 16 12.25C16 11.8703 15.7178 11.5565 15.3518 11.5068L15.25 11.5Z"
        fill="#F9FAFB"
      />
      <rect
        x="17"
        y="1"
        width="8"
        height="8"
        rx="4"
        fill="#0EA5E9"
        stroke="#3f3f46"
        strokeWidth="2"
      />
    </svg>
  );
}
