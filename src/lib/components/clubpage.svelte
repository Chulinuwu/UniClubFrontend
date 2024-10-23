<script lang="ts">
    export let club: {
        name: string;
        header: string;
        imageURL: string;
        members: { name: string; studentId: string }[];
        contacts: { name: string; phone: string; email: string }[];
    } | undefined;

</script>

{#if club}
    <div class="p-5">
        <h1 class="text-2xl font-bold">{club.name}</h1>
        <p class="text-lg">{club.header}</p>
        <img src={club.imageURL} alt={club.name} class="w-full h-auto mt-4" />
        <div class="mt-4">
            <h3 class="text-lg font-semibold">Members</h3>
            <ul class="list-disc list-inside">
                {#each club.members as member}
                    <li>{member.name} (ID: {member.studentId})</li>
                {/each}
            </ul>
        </div>
        <div class="mt-4">
            <h3 class="text-lg font-semibold">Contacts</h3>
            <ul class="list-disc list-inside">
                {#each club.contacts as contact}
                    <li>{contact.name} - {contact.phone} - {contact.email}</li>
                {/each}
            </ul>
        </div>
    </div>
{:else}
    <div class="p-5">
        <h1 class="text-2xl font-bold">Club not found</h1>
        <p class="text-lg">The club you are looking for does not exist.</p>
    </div>
{/if}