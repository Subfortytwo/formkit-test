<template>
	<footer class="flex flex-col justify-center mx-auto w-full bg-black">
		<hr class="w-full border-1 border-gray-600 dark:border-gray-800 mb-8" />

		<div class="px-5 pb-10">
			<div class="container max-w-lg mx-auto text-center text-gray-700">
				<p class="mb-3 font-semibold">
					© {{ new Date().getFullYear() }}
					roiLeo. All rights reserved.
				</p>

				<p class="text-sm text-gray-700">
					This website is built with
					<a
						href="https://v3.nuxtjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="
							underline
							hover:no-underline
							hover:text-gray-600
							transition
						"
						>Nuxt 3</a
					>
					&amp;
					<a
						href="https://windicss.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="
							underline
							hover:no-underline
							hover:text-gray-600
							transition
						"
						>Windi CSS</a
					>
					and hosted on
					<a
						href="https://netlify.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="
							underline
							hover:no-underline
							hover:text-gray-600
							transition
						"
						>Netlify</a
					>.
					<br />
					The source code is available on
					<a
						href="https://github.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="
							underline
							hover:no-underline
							hover:text-gray-600
							transition
						"
						>Github</a
					>.
				</p>
			</div>
		</div>
	</footer>
</template>
