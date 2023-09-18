<div>
	<section id="header">
		<span />
		<div>
			<div>
				<span />
				<div />
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
			<div>
				<span />
				<div>
					<h2>IT 101</h2>
					<p>Let's test what you've learned...</p>
				</div>
			</div>

			<div>
				<span />
				<div />
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
	div:has(> section#header) {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	section#header {
		width: 100%;
		position: relative;
		display: flex;
		gap: 1.5rem;
		flex-direction: column-reverse;
		@media (min-width: 768px) and (max-width: 1279px) {
			align-items: center;
		}
		@media (min-width: 768px) {
			flex-direction: row;
			padding-right: 2rem;
		}

		@media (min-width: 768px) {
			scroll-snap-type: x mandatory;
		}
		scroll-behavior: smooth;
		scroll-padding-left: 0.5rem;
		scroll-snap-type: y mandatory;
	}

	section#header > aside {
		flex-grow: 1;
	}

	section#header > div {
		scroll-snap-align: start;
		scroll-snap-stop: normal;
		position: relative;
	}
	section#header > div {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		padding-top: 3rem;
		@media (min-width: 768px) {
			padding-left: 2rem;
			max-width: 480px;
		}
		@media (min-width: 1024px) {
			max-width: 540px;
		}
		@media (max-width: 1279px) {
			height: calc(100vh - 10.6875rem);
		}
		@media (min-width: 1280px) {
			max-width: 720px;
			scroll-padding-left: 1.5rem;
			scroll-snap-type: x mandatory;
			overflow-x: scroll;
			flex-direction: row;
			padding-top: 0.5rem;
		}
		gap: 1.5rem;
		scroll-padding-top: 1.5rem;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}

	section#header > span {
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
	section#header > span:first-of-type {
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

	section#header > span:last-of-type {
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

	section#header > aside {
		background: #151515;

		border: 2px dashed rgb(97, 69, 93);
		@media (min-width: 768px) {
			border: 2px dashed rgb(97, 69, 93);
			border-radius: 0.5rem;
		}
		@media (min-width: 1280px) {
			margin-top: 0.5rem;
		}
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		height: 160px;
	}

	section#header > div::-webkit-scrollbar {
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
	section#header > div > div {
		scroll-snap-align: start;
		flex-shrink: 0;
		scroll-snap-stop: always;
		position: relative;
	}

	section#header > div > div:first-child > div,
	section#header > div > div:last-child > div {
		position: relative;
		flex-shrink: 0;

		height: 1rem;
		@media (min-width: 1280px) {
			width: 1rem;
		}
		@media (min-width: 768px) and (max-width: 1279px) {
			height: 12rem;
		}
		border: none;
	}

	section#header > div > div:first-child:hover > div,
	section#header > div > div:last-child:hover > div {
		transform: translate(0, 0);
		background: transparent;
	}
	section#header > div > div > div {
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

	section#header > div > div > span {
		position: absolute;
		inset: 0;
		border: 2px dashed rgba(231, 184, 225, 0.4);
		border-radius: 0.5rem;
	}

	section#header > div > div:hover > div {
		transform: translate(-0.5rem, -0.5rem);
		background: rgba(114, 75, 109, 0.4);
	}
</style>
