export interface StyleClosetTheme {
  colors: {
    main: string;
    content: string;
    helper: string;
    mobile: string;
  };
  fontFamily: {
    mainFont: string;
    specialFont: string;
  };
  fontType: {
    serif: string;
    cursive: string;
  };
  fontWeight: {
    XS: number;
    S: number;
    XM: number;
    M: number;
    XL: number;
    L: number;
  };
  fontSize: {
    XXS: string;
    XS: string;
    S: string;
    M: string;
  };
}

export const theme: StyleClosetTheme = {
  colors: {
    // main: 'rgb(41,42,44)',
    main: 'rgba(255, 211, 80, 0.7)',
    mobile: 'rgba(255, 211, 80, 0.9)',
    content: '#F8FBFF',
    helper: '#4caf50',
  },
  fontFamily: {
    mainFont: `Encode Sans SC`,
    specialFont: 'Shadows Into Light',
  },
  fontType: {
    serif: 'sans-serif',
    cursive: 'cursive',
  },
  fontWeight: {
    XS: 300,
    S: 400,
    XM: 500,
    M: 600,
    XL: 700,
    L: 800,
  },
  fontSize: {
    XXS: '0.7em',
    XS: '1em',
    S: '1.6em',
    M: '2em',
  },
};
