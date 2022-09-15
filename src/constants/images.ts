import { Colors } from '@/theme'

export const Images = {
  exampleImage: require('../../images/exampleImage.jpg'),
}

export const Icons = {
  search: (color: string = Colors.white): string => (`
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237
          19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2
          11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031
          16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132
          14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204
          18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875V15.875Z"
        fill="${color}"
      />
    </svg>`
  ),
  box: (): string => `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3H21.008C21.1393 2.99973
        21.2693 3.02556 21.3905 3.07601C21.5117 3.12645 21.6217 3.2005 21.714
        3.29383C21.8063 3.38717 21.8791 3.49794 21.9282 3.61969C21.9773 3.74144
        22.0017 3.87173 22 4.003V10H21V20.001C21.0004 20.1318 20.975 20.2614
        20.9253 20.3824C20.8756 20.5034 20.8026 20.6134 20.7104 20.7062C20.6182
        20.7989 20.5086 20.8726 20.3879 20.923C20.2672 20.9735 20.1378 20.9996
        20.007 21H3.993C3.8622 20.9996 3.73276 20.9735 3.61207 20.923C3.49139
        20.8726 3.38181 20.7989 3.2896 20.7062C3.19739 20.6134 3.12436 20.5034
        3.07467 20.3824C3.02498 20.2614 2.99961 20.1318 3 20.001V10ZM19
        10H5V19H19V10ZM4 5V8H20V5H4ZM9 12H15V14H9V12Z"
        fill="#47E6B6"
      />
    </svg>
`,
  chevronUp: (color: string = Colors.accentGray3): string => `
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99999 2.828L2.04999 7.778L0.635986 6.364L6.99999 0L13.364
        6.364L11.95 7.778L6.99999 2.828Z"
        fill="${color}"
      />
    </svg>`,
  chevronDown: (color: string = Colors.accentGray3): string => `
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999
        7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z"
        fill="${color}"
      />
    </svg>`,
  arrowLeft: (color: string = Colors.white): string => `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.828 7.00005H16V9.00005H3.828L9.192 14.364L7.778 15.778L0
        8.00005L7.778 0.222046L9.192 1.63605L3.828 7.00005Z"
        fill="${color}"
      />
    </svg>`,
  arrowRight: (color: string = Colors.white): string => `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.172 6.99998L6.808 1.63598L8.222 0.221985L16 7.99998L8.222
        15.778L6.808 14.364L12.172 8.99998H0V6.99998H12.172Z"
        fill="${color}"
      />
    </svg>`,
  calendar: (color: string = Colors.white): string => `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043
        20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196
        19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893
        19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043
        0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM13
        4H7V6H5V4H2V8H18V4H15V6H13V4ZM18 10H2V18H18V10Z"
        fill="${color}"
      />
    </svg>`,
  doubleChevronRight: (color: string = Colors.accentGray3): string => `
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17198 7L0.221985 2.05L1.63598 0.636002L7.99998 7L1.63598
        13.364L0.221985 11.95L5.17198 7Z"
        fill="${color}"
      />
      <path
        d="M 12.675 7 L 7.725 2.05 L 9.139 0.636 L 15.503 7 L 9.139 13.364 L
        7.725 11.95 L 12.675 7 Z"
        fill="${color}"
      />
    </svg>`,
  chevronRight: (color: string = Colors.accentGray3): string => `
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17198 7L0.221985 2.05L1.63598 0.636002L7.99998 7L1.63598
        13.364L0.221985 11.95L5.17198 7Z"
        fill="${color}"
      />
    </svg>`,
  chevronLeft: (color: string = Colors.accentGray3): string => `
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.828 7L7.778 11.95L6.364 13.364L0 7L6.364 0.636002L7.778
        2.05L2.828 7Z"
        fill="${color}"
      />
    </svg>`,
  doubleChevronLeft: (color: string = Colors.accentGray3): string => `
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.828 7L7.778 11.95L6.364 13.364L0 7L6.364 0.636002L7.778
        2.05L2.828 7Z"
        fill="${color}"
      />
      <path
        d="M 10.308 7 L 15.258 11.95 L 13.844 13.364 L 7.48 7 L 13.844 0.636
        L 15.258 2.05 L 10.308 7 Z"
        fill="${color}"
      />
    </svg>`,
  warningCircle: (color: string = Colors.accentGray3): string => `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477
          22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
        fill="${color}"/>
    </svg>`,
}
