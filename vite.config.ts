import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
	plugins: [sveltekit(),viteTsconfigPaths()]
};

export default config;