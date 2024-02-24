import { writable } from 'svelte/store';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export interface CarouselAutoplay {
  delay: number; // Delay between slides in milliseconds
  count: number; // Total number of slides
}

export function useAutoplay(autoplayConfig: CarouselAutoplay) {
  const { delay, count } = autoplayConfig;
  let timer: number;

  const currentSlide = writable(0);

  const startAutoplay: () => void = () => {
    timer = setInterval(() => {
      currentSlide.update(n => (n + 1) % count);
    }, delay);
  };

  const stopAutoplay: () => void = () => {
    clearInterval(timer);
  };

  return {
    currentSlide,
    startAutoplay,
    stopAutoplay
  };
}
