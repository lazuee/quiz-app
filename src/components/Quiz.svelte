<div>
	<h1>Take some Quizes</h1>
	<section>
		<span />
		<div>
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>
		</div>
		<span />
		<aside>
			<h3>Why do we have to take the test?</h3>
			<p>Well, i don't know.</p>
		</aside>
	</section>
</div>

<style lang="scss">
	div:has(> section) {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	section {
		width: 100%;
		position: relative;
		display: flex;
		gap: 1.5rem;
		flex-direction: column-reverse;
		@media (min-width: 768px) {
			flex-direction: row;
			padding-right: 2rem;
		}

		@media (min-width: 768px) {
			scroll-padding-left: 0.5rem;
			scroll-snap-type: x mandatory;
		}
		scroll-behavior: smooth;
		scroll-padding-left: 0.5rem;
		scroll-snap-type: y mandatory;
	}

	section > aside {
		flex-grow: 1;
	}

	section > div {
		scroll-snap-align: start;
		scroll-snap-stop: normal;
		position: relative;
	}
	section > div {
		position: relative;
		width: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;

		@media (max-width: 767px) {
			scroll-padding-bottom: 2rem;
			padding: 1.5rem 2rem;
		}
		@media (min-width: 768px) {
			max-width: 480px;
			padding-left: 2rem;
			padding-top: 2rem;
		}
		@media (min-width: 1024px) {
			max-width: 540px;
		}
		@media (max-width: 1279px) {
			height: calc(100vh - 190px);
		}
		@media (min-width: 1280px) {
			max-width: 720px;
			scroll-padding-left: calc(1.5rem + 1.3rem);
			scroll-snap-type: x mandatory;
			padding-top: 0.625rem;
			overflow-x: scroll;
			flex-direction: row;
		}
		gap: 1.3rem;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}

	section > span {
		position: absolute;
		z-index: 7;
		pointer-events: none;
		@media (min-width: 1280px) {
			width: 3rem;
			height: 188px;
			top: 0;
		}

		@media (min-width: 768px) {
			max-width: 480px;
		}
		@media (min-width: 1024px) {
			max-width: 540px;
		}
		width: 100%;
		height: 3rem;
	}
	section > span:first-of-type {
		left: 0;
		top: calc(160px + 1.5rem);

		@media (min-width: 768px) {
			top: 0;
		}
		@media (min-width: 1280px) {
			background: linear-gradient(to right, #151217 0%, hsla(276, 12%, 8%, 0) 60%);
		}
		background: linear-gradient(to bottom, #151217 0%, #15121700 60%);
	}

	section > span:last-of-type {
		left: 0;
		@media (min-width: 1280px) {
			left: calc(730px - 3rem) !important;
			background: linear-gradient(to left, #151217 0%, #15121700 60%);
		}
		@media (max-width: 1280px) {
			bottom: 0;
		}
		background: linear-gradient(to top, #151217 0%, #15121700 60%);
	}

	section > aside {
		background: #151515;

		border: 2px dashed rgb(97, 69, 93);
		@media (min-width: 768px) {
			border: 2px dashed rgb(97, 69, 93);
			border-radius: 0.5rem;
		}
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		margin-top: 0.625rem;
		height: 160px;
	}

	section > div::-webkit-scrollbar {
		width: 0px;
		background-color: transparent;

		&-thumb {
			background-color: transparent;
			background-clip: content-box;
		}

		&-thumb:hover {
			background-color: transparent;
		}
	}
	section > div > div {
		scroll-snap-align: start;
		scroll-snap-stop: normal;
		position: relative;
	}
	section > div > div > div {
		width: 100%;
		@media (min-width: 1280px) {
			width: 300px;
		}
		height: 160px;
		position: relative;
		border: 2px solid rgb(97, 69, 93);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	section > div > div > span {
		position: absolute;
		inset: 0;
		border: 2px dashed rgba(231, 184, 225, 0.4);
		border-radius: 0.5rem;
	}

	section > div > div:hover > div {
		transform: translate(-0.5rem, -0.5rem);
		background: rgba(114, 75, 109, 0.4);
	}
</style>
