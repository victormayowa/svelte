<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
    import * as Avatar from "$lib/components/ui/avatar";
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { onMount } from 'svelte';
  	import { writable } from 'svelte/store';

	// Array of navigation items
	const navItems = writable([
    { label: 'Home', href: '#' },
    { label: 'Dropdown', subItems: ['Dashboard', 'Settings', 'Earnings', 'Sign out'] },
    { label: 'Services', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' }
  ]);

  // Function to handle dropdown toggle
  const toggleDropdown = (index: number) => {
    const items = $navItems;
    items[index].open = !items[index].open;
    navItems.set(items);
  };

  // Run onMount to initialize dropdown states
  onMount(() => {
    navItems.update(items => {
      return items.map(item => {
        return { ...item, open: false };
      });
    });
  });

</script>

<nav class="fixed top-0 z-50 w-full border-gray-200 bg-white dark:bg-gray-900">
	<!-- Logo and dropdown button-->
	<div class="relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<div class="flex items-center gap-5">
			<Sheet.Root>
				<Sheet.Trigger
					data-collapse-toggle="navbar-user"
					type="button"
					class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-user"
					aria-expanded="false"
				>
					<Menu />
				</Sheet.Trigger>
				<Sheet.Content>
					<Sheet.Header>
						<Sheet.Title>Menu</Sheet.Title>
						<Sheet.Description>
							<div class="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
								<ul class="space-y-2 font-medium">
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 22 21"
											>
												<path
													d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
												/>
												<path
													d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
												/>
											</svg>
											<span class="ms-3">Dashboard</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 18 18"
											>
												<path
													d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
												/>
											</svg>
											<span class="ms-3">Kanban</span>
											<span
												class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
												>Pro</span
											>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
												/>
											</svg>
											<span class="ms-3">Inbox</span>
											<span
												class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
												>3</span
											>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 18"
											>
												<path
													d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
												/>
											</svg>
											<span class="ms-3">Users</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 18 20"
											>
												<path
													d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
												/>
											</svg>
											<span class="ms-3">Products</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 16"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
												/>
											</svg>
											<span class="ms-3">Sign In</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
												/>
												<path
													d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
												/>
												<path
													d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
												/>
											</svg>
											<span class="ms-3">Sign Up</span>
										</a>
									</li>
								</ul>
							</div>
						</Sheet.Description>
					</Sheet.Header>
				</Sheet.Content>
			</Sheet.Root>
			<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img src="https://github.com/victormayowa/svelte/blob/main/feradel/static/Gemini_Generated_Image%20(6).jpg?raw=true" class="h-10 rounded-full" alt="Logo" />
				<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
					>Feradelliance</span
				>
			</a>
		</div>

		<!-- Navbar-->
		<div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    {#each $navItems as item, i}
      {#if item.subItems}
        <li>
          <button
            class="flex items-center justify-between w-full py-2 px-3
			text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-700 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            on:click={() => toggleDropdown(i)}>
            {item.label}
            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Dropdown menu -->
          {#if item.open}
            <div class="fixed z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                {#each item.subItems as subItem}
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{subItem}</a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </li>
      {:else}
        <li>
          <a href={item.href} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
		  mr-2 font-semibold capitalize md:hover:bg-white text-black md:bg-transparent md:hover:border-b-2 md:hover:border-green-700
		  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white ">{item.label}</a>
        </li>
      {/if}
    {/each}
  </ul>
</div>
						
		  			<!-- login, register, avatar -->
		  <div class="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
			<Button class="mr-2 font-semibold capitalize hover:bg-white text-black bg-transparent hover:border-b-2 hover:border-green-700"
			>Login/Register
			</Button>
			<button
				type="button"
				class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
				id="user-menu-button"
				aria-expanded="false"
				data-dropdown-toggle="user-dropdown"
				data-dropdown-placement="bottom"
			>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Avatar.Root>
                            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                            <Avatar.Fallback>CN</Avatar.Fallback>
                        </Avatar.Root>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Group>
							<DropdownMenu.Label>My Account</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Profile</DropdownMenu.Item>
							<DropdownMenu.Item>Billing</DropdownMenu.Item>
							<DropdownMenu.Item>Team</DropdownMenu.Item>
							<DropdownMenu.Item>Subscription</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</button>

			<!-- <div
				class="z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
				id="user-dropdown"
			>
				<div class="px-4 py-3">
					<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
					<span class="block truncate text-sm text-gray-500 dark:text-gray-400"
						>name@flowbite.com</span
					>
				</div>
				<ul class="py-2" aria-labelledby="user-menu-button">
					<li>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>Dashboard</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>Settings</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>Earnings</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>Sign out</a
						>
					</li>
				</ul>
			</div> -->
		</div>
		<!-- <div
			class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
			id="navbar-user"
		>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
			>
				<li>
					<a
						href="#"
						class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>About</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Services</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Pricing</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Contact</a
					>
				</li>
			</ul>
		</div> -->
	</div>
</nav>
