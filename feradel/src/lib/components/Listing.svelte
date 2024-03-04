<script lang='ts'>
    import type { Listing } from '$lib/types/types';
    import SwiperCore, { SwiperOptions } from 'swiper';
    // import SwiperCore, { SwiperOptions } from 'swiper/core';
    import { onMount, onBeforeDestroy } from 'svelte';

  SwiperCore.use([Pagination]);

  export let listing;

  let swiper;

  const initSwiper = () => {
    swiper = new SwiperCore('.listing-card__carousel', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.listing-card__pagination',
        clickable: true,
      },
    } as SwiperOptions);
  };

  onMount(() => {
    initSwiper();
  });

  onBeforeDestroy(() => {
    if (swiper) {
      swiper.destroy(true, true);
    }
  });
  </script>
  
  <div class="listing-card">
    <div class="listing-card__carousel swiper">
      <div class="swiper-wrapper">
        {#each listing.images as image, i}
          <div class="swiper-slide">
            <img src={image} alt={listing.title} />
          </div>
        {/each}
      </div>
      <div class="listing-card__pagination swiper-pagination"></div>
    </div>
    <div class="listing-card__info">
      <div class="listing-card__details">
        <span class="listing-card__status">{listing.status}</span>
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
      </div>
      <div class="listing-card__agent">
        <img src={listing.agent.image} alt={listing.agent.name} />
        <p>{listing.agent.name}</p>
      </div>
    </div>
    <div class="listing-card__features">
      <p>{listing.beds} Beds</p>
      <p>{listing.garage} Garage</p>
      <p>{listing.squareMeter} m²</p>
    </div>
    <div class="listing-card__price">
      <span>{listing.price}</span>
    </div>
    <button class="listing-card__favorite">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.8 1.2c-4.398.326-8.654 2.496-11.95 5.458-3.296 2.962-5.112 7.68-5.112 12.74C4.788 19.858 7.054 22.25 10.002 23.5a1.51 1.51 0 0 1-.738 1.905c-.548.667-1.287 1.124-2.135 1.124s-1.588-.457-2.136-1.124a1.51 1.51 0 0 1-.738-1.905c2.948-1.242 5.214-3.64"
        />
      </svg>
    </button>
  </div>
  