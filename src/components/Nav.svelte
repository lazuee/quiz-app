<nav>
	<div>
		<h1>Take your Quizes...</h1>
	</div>
	<div>
		<ul>
			<li><a href="/">Sign In</a></li>
			<li><a href="/">Sign Up</a></li>
		</ul>
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 2rem;
	}
	nav > div {
		display: flex;
		align-items: center;
	}
	nav > div > ul {
		list-style-type: none;
		display: flex;
		gap: 0.5rem;
	}
	nav > div > ul > li {
		padding: 0.5rem 1rem;
		border: 2px solid rgb(97, 69, 93);
		border-radius: 0.5rem;
		@media (min-width: 1024px) {
			border-radius: 9999px;
		}
	}
</style>
