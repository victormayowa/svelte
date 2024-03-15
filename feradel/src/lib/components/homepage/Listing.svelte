<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const listings = [
		{
			id: 1,
			name: 'Luxury Villa',
			location: 'Los Angeles, CA',
			price: '$1,500,000',
			views: 1234,
			images: [
				'https://example.com/image1.jpg',
				'https://example.com/image2.jpg',
				'https://example.com/image3.jpg',
				'https://example.com/image4.jpg',
				'https://example.com/image5.jpg'
			]
		},
		{
			id: 2,
			name: 'Beachfront Condo',
			location: 'Miami, FL',
			price: '$900,000',
			views: 987,
			images: [
				'https://example.com/image6.jpg',
				'https://example.com/image7.jpg',
				'https://example.com/image8.jpg',
				'https://example.com/image9.jpg',
				'https://example.com/image10.jpg'
			]
		},
		{
			id: 3,
			name: 'Mountain Retreat',
			location: 'Aspen, CO',
			price: '$2,200,000',
			views: 1450,
			images: [
				'https://example.com/image11.jpg',
				'https://example.com/image12.jpg',
				'https://example.com/image13.jpg',
				'https://example.com/image14.jpg',
				'https://example.com/image15.jpg'
			]
		},
		{
			id: 4,
			name: 'City Loft',
			location: 'New York, NY',
			price: '$1,200,000',
			views: 768,
			images: [
				'https://example.com/image16.jpg',
				'https://example.com/image17.jpg',
				'https://example.com/image18.jpg',
				'https://example.com/image19.jpg',
				'https://example.com/image20.jpg'
			]
		},
		{
			id: 5,
			name: 'Seaside Cottage',
			location: 'Cape Cod, MA',
			price: '$750,000',
			views: 1350,
			images: [
				'https://example.com/image21.jpg',
				'https://example.com/image22.jpg',
				'https://example.com/image23.jpg',
				'https://example.com/image24.jpg',
				'https://example.com/image25.jpg'
			]
		},
		{
			id: 6,
			name: 'Lakefront Cabin',
			location: 'Lake Tahoe, NV',
			price: '$950,000',
			views: 890,
			images: [
				'https://example.com/image26.jpg',
				'https://example.com/image27.jpg',
				'https://example.com/image28.jpg',
				'https://example.com/image29.jpg',
				'https://example.com/image30.jpg'
			]
		},
		{
			id: 7,
			name: 'Golf Course Estate',
			location: 'Scottsdale, AZ',
			price: '$3,000,000',
			views: 2100,
			images: [
				'https://example.com/image31.jpg',
				'https://example.com/image32.jpg',
				'https://example.com/image33.jpg',
				'https://example.com/image34.jpg',
				'https://example.com/image35.jpg'
			]
		},
		{
			id: 8,
			name: 'Historic Brownstone',
			location: 'Boston, MA',
			price: '$1,800,000',
			views: 980,
			images: [
				'https://example.com/image36.jpg',
				'https://example.com/image37.jpg',
				'https://example.com/image38.jpg',
				'https://example.com/image39.jpg',
				'https://example.com/image40.jpg'
			]
		},
		{
			id: 9,
			name: 'Ranch Retreat',
			location: 'Montana',
			price: '$4,500,000',
			views: 1800,
			images: [
				'https://example.com/image41.jpg',
				'https://example.com/image42.jpg',
				'https://example.com/image43.jpg',
				'https://example.com/image44.jpg',
				'https://example.com/image45.jpg'
			]
		},
		{
			id: 10,
			name: 'Urban Penthouse',
			location: 'Chicago, IL',
			price: '$1,700,000',
			views: 1230,
			images: [
				'https://example.com/image46.jpg',
				'https://example.com/image47.jpg',
				'https://example.com/image48.jpg',
				'https://example.com/image49.jpg',
				'https://example.com/image50.jpg'
			]
		},
		{
			id: 11,
			name: 'Desert Oasis',
			location: 'Palm Springs, CA',
			price: '$1,250,000',
			views: 1500,
			images: [
				'https://example.com/image51.jpg',
				'https://example.com/image52.jpg',
				'https://example.com/image53.jpg',
				'https://example.com/image54.jpg',
				'https://example.com/image55.jpg'
			]
		},
		{
			id: 12,
			name: 'Island Paradise',
			location: 'Honolulu, HI',
			price: '$6,000,000',
			views: 2500,
			images: [
				'https://example.com/image56.jpg',
				'https://example.com/image57.jpg',
				'https://example.com/image58.jpg',
				'https://example.com/image59.jpg',
				'https://example.com/image60.jpg'
			]
		}
	];
</script>

<div class="flex flex-col">
	<h1 class="mx-auto mb-4 text-2xl font-bold">LISTING</h1>
	<div
		class="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
	>
		{#each Array(12) as _, i}
			<div id="indicators-carousel" class="relative w-full rounded-lg" data-carousel="static">
				<!-- Carousel wrapper -->
				<div class="relative h-56 overflow-hidden md:h-96 rounded-lg">
					<!-- Item 1 -->
					<div class="hidden duration-700 ease-in-out" data-carousel-item="active">
						<img
							src="https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(6).jpg?raw=true"
							class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
					<!-- Item 2 -->
					<div class="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src="https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(1).jpg?raw=true"
							class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
					<!-- Item 3 -->
					<div class="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src="https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(2).jpg?raw=true"
							class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
					<!-- Item 4 -->
					<div class="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src="https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(4).jpg?raw=true"
							class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
					<!-- Item 5 -->
					<div class="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src="https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(3).jpg?raw=true"
							class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
				</div>
				<!-- Slider indicators -->
				<div
					class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
				>
					<button
						type="button"
						class="h-3 w-3 rounded-full"
						aria-current="true"
						aria-label="Slide 1"
						data-carousel-slide-to="0"
					></button>
					<button
						type="button"
						class="h-3 w-3 rounded-full"
						aria-current="false"
						aria-label="Slide 2"
						data-carousel-slide-to="1"
					></button>
					<button
						type="button"
						class="h-3 w-3 rounded-full"
						aria-current="false"
						aria-label="Slide 3"
						data-carousel-slide-to="2"
					></button>
					<button
						type="button"
						class="h-3 w-3 rounded-full"
						aria-current="false"
						aria-label="Slide 4"
						data-carousel-slide-to="3"
					></button>
					<button
						type="button"
						class="h-3 w-3 rounded-full"
						aria-current="false"
						aria-label="Slide 5"
						data-carousel-slide-to="4"
					></button>
				</div>
				<!-- Slider controls -->
				<button
					type="button"
					class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
					data-carousel-prev
				>
					<span
						class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
					>
						<svg
							class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 1 1 5l4 4"
							/>
						</svg>
						<span class="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
					data-carousel-next
				>
					<span
						class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
					>
						<svg
							class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 9 4-4-4-4"
							/>
						</svg>
						<span class="sr-only">Next</span>
					</span>
				</button>
			</div>
		{/each}
	</div>
	<div class="mt-4 text-center">
		<a href="/listings" class="text-blue-500 hover:underline">View More Listings</a>
	</div>
</div>
