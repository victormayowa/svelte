<script lang="ts">
	import * as Card from '$lib/components/ui/card';
    import { Button } from "$lib/components/ui/button";
</script>

<div class="mt-4 mb-4 flex flex-col items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
	<h1 class="service">SERVICE</h1>
	<div class="mt-6 mb-4 flex gap-4">
		<Card.Root class="">
            <Card.Header>
                <Card.Title>BUY/SELL</Card.Title>
                <Card.Description>picture of house</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Unlock a World of Opportunities in Real Estate: Explore a Diverse Range of Properties Available for Purchase, Tailored to Your Preferences, and Easily Filtered to Your Desired Location.</p>
            </Card.Content>
            <Card.Footer>
                <Button class="w-full">
                    <p class="mr-2 h-4 w-4">BUY/SELL</p>
                </Button>
            </Card.Footer>
        </Card.Root>
		<Card.Root>
            <Card.Header>
                <Card.Title>RENT/LEASE</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Rent with Ease, Lease with Confidence: Find the Perfect Space for Your Needs, Whether Short-term or Long-term, and Enjoy Hassle-free Transactions Every Step of the Way.</p>
            </Card.Content>
            <Card.Footer>
                <Button class="w-full">
                    <p class="mr-2 h-4 w-4">RENT/LEASE</p>
                </Button>
            </Card.Footer>
        </Card.Root>
		<Card.Root>
            <Card.Header>
                <Card.Title>CONSULT/RELOCATE</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>"Seamless Consultation, Smooth Relocation: Trust Our Experts to Guide You Through Every Aspect of Your Move, Providing Tailored Advice and Support for a Stress-free Transition."</p>
            </Card.Content>
            <Card.Footer>
                <Button class="w-full">
                    <p class="mr-2 h-4 w-4">CONSULT/RELOCATE</p>
                </Button>
            </Card.Footer>
        </Card.Root>
		<Card.Root>
            <Card.Header>
                <Card.Title>PROPERTY MANAGEMENT/INVESTMENT ADVISORY</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Optimize Your Investments with Expert Guidance: From Property Management to Strategic Investment Advisory, We Help You Maximize Returns and Navigate the Real Estate Market with Confidence</p>
            </Card.Content>
            <Card.Footer>
                <Button class="primary">
                    <p class="mr-2 h-4 w-4">Manage & Invest</p>
                </Button>
            </Card.Footer>
        </Card.Root>
	</div>
</div>
