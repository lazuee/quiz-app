<script lang="ts">
	import { onMount } from 'svelte';
	import Cursor from '../components/Cursor.svelte';
	import '../styles/fonts.scss';
	import '../styles/global.scss';

	let loading = true;
	let playSFX: (() => void) | undefined;

	onMount(() => {
		// need to create our own audio context as the default Audio() pauses any music playing
		let buffer: AudioBuffer;
		const audioCtx = new window.AudioContext();
		const request = new XMLHttpRequest();
		request.open('GET', 'sounds/click.ogg', true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			const audioData: ArrayBuffer = request.response;
			audioCtx.decodeAudioData(audioData, function (decodedBuffer) {
				buffer = decodedBuffer;
				playSFX = () => {
					const source = audioCtx.createBufferSource();
					source.buffer = buffer;
					source.connect(audioCtx.destination);
					source.start(0);
				};
			});
		};
		request.send();

		if (document.readyState === 'complete') {
			loading = false;
		}

		const classes = document.querySelector('body')?.classList;
		const stopResizeAnimation = () => {
			let timer: any = 0;
			window.addEventListener('resize', function () {
				if (timer) {
					clearTimeout(timer);
					timer = null;
				} else {
					classes?.add('stop-transitions');
				}

				timer = setTimeout(() => {
					classes?.remove('stop-transitions');
					timer = null;
				}, 100);
			});
		};

		stopResizeAnimation();
	});
</script>

<svelte:head>
	<title>lazuee</title>
</svelte:head>

<svelte:window on:click={playSFX} />

<Cursor />
<span class:loading>
	<slot />
</span>

<style>
	.loading * {
		transition: none;
	}
</style>