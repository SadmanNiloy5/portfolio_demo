/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  interface SplitText {
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }

  export class SplitText {
    constructor(target: string | HTMLElement | (string | HTMLElement)[], vars?: any);
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother';
