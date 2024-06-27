<script lang="ts">
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<nav class="flex justify-between mb-4 not-prose sticky top-0 py-2 bg-gradient-to-b from-base-100 to-transparent z-[1]">

    <div role="tablist" class="">
        <a role="tab" class="btn btn-sm" href="https://darklynx.org/">Board</a>
        <a role="tab" class="btn btn-active btn-sm" href="/">Journal</a>
    </div>
    
    <div class="inline-flex">
        <a class="max-sm:hidden font-mono text-xl mr-5 my-auto cursor-pointer hover:text-primary" href="https://darklynx.org/">
            Maxim Peniaz
        </a>
        <a class="sm:hidden font-mono text-2xl mr-5 my-auto cursor-pointer hover:text-primary" href="https://darklynx.org/">
            MP
        </a>
        <ThemeSwitcher themeOptions={["dark", "light"]}/>
    </div>
</nav>