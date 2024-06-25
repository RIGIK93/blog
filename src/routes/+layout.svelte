<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.scss"
</script>

<div class="max-w-[70ch] my-10 mx-auto px-5 md:px-0 md:w-1/2 sm:min-h-[calc(100vh-8.25rem)] min-h-[calc(100vh-9.5rem)]">
    <Header></Header>

    <main>
        <slot />
    </main>

</div>

<Footer></Footer>
