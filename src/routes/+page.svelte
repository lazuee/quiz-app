<script>
	// @ts-ignore
	import Footer from "../components/Footer.svelte";
	import Quiz from "../components/Quiz.svelte";
</script>

<div class="wrapper">
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
