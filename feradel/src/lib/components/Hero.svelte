<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { useAutoplay } from '$lib/utils/useAutoplay';
	import type { CarouselAutoplay } from '$lib/utils/useAutoplay';

	const images = [
		{
			src: 'https://img.freepik.com/premium-photo/3d-rendering-modern-upscale-residential-building_190619-4497.jpg?w=740',
			alt: 'Hero image 1'
		},
		{
			src: 'https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1708775759~exp=1708779359~hmac=475e174d89100ba068be57364ec9c4747874a557cfb023dc3599026e6445a29a&w=740',
			alt: 'Hero image 2'
		},
		{
			src: 'https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1708775759~exp=1708779359~hmac=475e174d89100ba068be57364ec9c4747874a557cfb023dc3599026e6445a29a&w=740',
			alt: 'Hero image 3'
		}
	];
	const autoplayConfig = {
		delay: 1000,
		count: images.length
	};

	let api: CarouselAPI | undefined;
	let current = 1;
	let autoplayInterval: ReturnType<typeof setTimeout> | undefined;

	const currentSlide = {
		subscribe: (callback: (value: number) => void) => {
			callback(current);
		}
	};

	const startAutoplay = () => {
		const autoplayInterval = timeout(() => {
			current = (current % autoplayConfig.count) + 1;
		}, autoplayConfig.delay);
	};

	const stopAutoplay = () => {
		if (typeof autoplayInterval !== 'undefined') {
			clearTimeoutFn(autoplayInterval);
		}
	};

	onMount(() => {
		startAutoplay();
	});

	onDestroy(() => {
		stopAutoplay();
	});

	// Timeout function
	type Timer = ReturnType<typeof setTimeout>;

	const timeout = (callback: () => void, delay: number): Timer => {
		return setTimeout(callback, delay);
	};

	const clearTimeoutFn = (timer: Timer) => {
		clearTimeout(timer);
	};
</script>

<div class="flex bg-orange-50 pt-[40px] flex-col lg:flex-row items-center">
	<div class="max-w-[400px] text-center">
		<h1 class="text-4xl p-0 -mt-14">Seamless Collaboration for Secure Real Estate Services <span class="font-semibold italic text-orange-700">anywhere, anytime</span></h1>

		<p class="mt-8 text-xl capitalize">
			Where Dreams Find Address: Safeguarding Your Real Estate Journey with Expert Guidance, Ensuring Secure Transactions in Buying, Selling, Renting, and Leasing Across Nigeria's Rich Property Spectrum.
		</p>
	</div>
	<div class="w-auto mx-auto">
		<video class="w-full h-auto max-h-[500px] max-w-[500px] p-[px] rounded-lg m-6" autoplay playsinline loop muted>
			<track kind="captions" />
			<source
				class="rounded-lg"
				src="https://v5.cdnpk.net/videvo_files/video/premium/partners0814/large_preview/h35477c60_V1-0001_2020.08.01%20Kolosyuk%20Poolside%20relaxation%202%20Bali00243930.mp4"
				type="video/mp4"
			/>
		</video>
		<Button class="mt-2 mb-6 ml-40 p-6 font-semibold capitalize text-white"
			>get started now
			<ArrowRight class="h-5 w-5" />
		</Button>
	</div>
</div>

<section class="hero bg-orange-50">
	<div class="container mx-auto px-4">
		<div class="mt-8 flex justify-between">
			<button class="rounded-md bg-white px-4 py-2 text-gray-700 hover:bg-gray-200"
				>Find Property</button
			>
			<a href="/search" class="rounded-md bg-white px-4 py-2 text-gray-700 hover:bg-gray-200"
				>Explore Now</a
			>
		</div>

		<div class="search-bar mt-8 flex items-center">
			<select id="type" class="rounded-md border border-gray-300 px-2 py-1">
				<option value="buy">Buy</option>
				<option value="rent">Rent</option>
			</select>
			<select id="property" class="border-gray-30AQ0 ml-2 rounded-md border px-2 py-1">
				<option value="apartment">Apartment</option>
				<option value="property">Property</option>
			</select>
			<input
				type="text"
				id="location"
				class="ml-2 flex-grow rounded-md border border-gray-300 px-2 py-1"
				placeholder="Location in Nigeria"
			/>
			<select id="price" class="ml-2 rounded-md border border-gray-300 px-2 py-1">
				<option value="0-500000">N0 - N500,000</option>
				<option value="500000-1000000">N500,000 - N1,000,000</option>
			</select>
			<button
				id="search-button"
				class="ml-2 rounded-md bg-white px-4 py-2 text-gray-700 hover:bg-gray-200">Search</button
			>
		</div>
	</div>
</section>

<!-- markup (zero or more items) goes here -->

<!-- <div class="grid grid-cols-3 gap-4 mb-4">
    <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                />
            </svg>
        </p>
    </div>
    <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                />
            </svg>
        </p>
    </div>
    <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                />
            </svg>
        </p>
    </div>
</div> -->
<style>
	/* your styles go here */
</style>
