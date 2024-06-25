<script lang="ts">
    import type { BlogPost } from "$lib";

	export let data: BlogPost;
    const {title, date, content} = data;
</script>

<svelte:head>
	<title>Maxim's Fantasy Journal - {title}</title>
	<meta property="og:title" content={title} />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-tomorrow.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">
</svelte:head>

<article class="prose font-mono">
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<svelte:component this={content} />
</article>
