<script>
	// @ts-ignore
	import Footer from "../components/Footer.svelte";
	import Nav from "../components/Nav.svelte";
	import Quiz from "../components/Quiz.svelte";
</script>

<div class="wrapper">
	<div
		style="position: absolute; overflow: hidden; display: flex; justify-content: center; z-index: -20; top: 0; left: 0; right: 0; pointer-events: none;">
		<div style="flex: none; justify-content: flex-start; width: 108rem; display: flex;">
			<picture
				><source type="image" /><img
					style="max-width: none; width: 90rem; flex: none; display: block"
					src="images/tiny.png"
					alt=""
					decoding="async" /></picture>
		</div>
	</div>
	<Nav />
	<main>
		<Quiz />
	</main>
	<Footer />
</div>

<style lang="scss">
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	main {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
</style>
