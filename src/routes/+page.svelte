<script lang="ts">
    import type { PostHeader } from "$lib";

	export let data: {posts: PostHeader[]};
</script>

<svelte:head>
	<title>Maxim's Fantasy Journal</title>
	<meta property="og:title" content="Maxim's Fantasy Journal" />
</svelte:head>

<menu class="flex flex-col gap-5">
	{#each data.posts as post}
		<a href={post.path} class="flex justify-between hover:bg-base-200 rounded-lg shadow-xl min-h-10 p-3 transform active:scale-95 transition-transform">
			<h2 class="font-mono text-lg">{post.meta.title}</h2>
			<span class="font-mono">{post.meta.date}</span>
		</a>
	{/each}
</menu>
