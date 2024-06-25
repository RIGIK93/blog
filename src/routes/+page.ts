import type { PostHeader } from '$lib';

export async function load({ fetch }): Promise<{posts: PostHeader[]}> {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};