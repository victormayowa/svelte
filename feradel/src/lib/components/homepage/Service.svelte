<script lang="ts">
	import * as Card from '$lib/components/ui/card';
    import { Button } from "$lib/components/ui/button";
    import { onMount } from 'svelte'

    const services = [
        {
            title: 'BUY/SELL',
            description: 'Unlock a World of Opportunities in Real Estate',
            image: 'https://github.com/victormayowa/svelte/blob/main/feradel/static/h1.jpg?raw=true'
        },
        {
            title: 'RENT/LEASE',
            description: 'Rent your prop with Ease, Lease them with Confidence',
            image: 'https://github.com/victormayowa/svelte/blob/main/feradel/static/p10-912x548.jpg?raw=true'
        },
        {
            title: 'CONSULT/RELOCATE',
            description: 'Seamless Consultation, Smooth Relocation.',
            image: 'https://github.com/victormayowa/svelte/blob/main/feradel/static/p15-414x264.jpg?raw=true'
        },
        {
            title: 'MANAGE/INVEST',
            description: 'Optimize Your Investments and Lets help manage your properties',
            image: 'https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(2).jpg?raw=true'
        }
    ];

    onMount(() => {
        // Any initialization code can go here
    });
</script>

<div class="mt-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
    {#each services as service}
        <Card.Root class="flex flex-col justify-center items-center">
            <Card.Header class="flex flex-col justify-center items-center">
                <Card.Description>
                    <img src={service.image} class="h-32 w-64 rounded-xl" alt={service.title} />
                    <hr class="w-64 h-1 mx-auto my-4 bg-orange-800 border-0 rounded md:my-6 dark:bg-gray-700">
                </Card.Description>
                <Card.Title><span class="font-black font-nunito text-xl">{service.title}</span></Card.Title>
            </Card.Header>
            <Card.Content class="text-center">
                <p class="text-sm font-nunito italic">{service.description}</p>
            </Card.Content>
            <Card.Footer class="flex justify-center">
                <Button class="hover:bg-green-800 p-4 font-semibold capitalize hover:text-white text-black bg-transparent border-2 border-green-800">
                    <p class="">{service.title}</p>
                </Button>
            </Card.Footer>
        </Card.Root>
    {/each}
</div>

