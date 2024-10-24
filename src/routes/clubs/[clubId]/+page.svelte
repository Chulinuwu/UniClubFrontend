<script lang="ts">
    import ClubNavbar from '$lib/components/ClubNavbar.svelte';
    import clubbg from '../../../lib/images/clubbg.png';
    import TabClub from '$lib/components/tabClub.svelte';

    
    export let data;
    const { club } = data;

    function handleSelect(item: string) {
        console.log('Selected item:', item);
    }

</script>

<ClubNavbar />
  
  {#if club}
    <div class="w-full h-full flex flex-col gap-[10px] items-center justify-center">
        <div class="flex w-full h-[100px] bg-slate-300"></div>
        <div class="flex w-full h-[256px]">
            <img src={clubbg} alt="clubbg" class="w-full h-full object-cover" />
        </div>
        <div class="absolute top-52 w-full flex justify-center">
        <img src={club.imageURL} alt="{club.name}" class="w-60  max-w-[240px] max-h-[240px] h-60 object-cover shadow-lg rounded-xl" />
        </div>
        <div class="flex flex-col w-full h-auto text-center items-center mt-28">
      <h1 class="text-xl font-bold text-black">{club.name}</h1>
      <p class="text-base text-uni-graytext">{club.header}</p>
      <div class="flex w-1/2 h-0.5 mt-4 bg-uni-red"></div>
    </div>
    <TabClub  onSelect={handleSelect} />

      <!-- <div class="flex flex-col space-y-2">
        <h2 class="text-2xl font-semibold">Tags</h2>
        <p><strong>Category:</strong> {club.tags.category}</p>
        <p><strong>Status:</strong> {club.tags.status}</p>
        <p><strong>Type:</strong> {club.tags.type}</p>
      </div>
    
      <div class="flex flex-col space-y-2">
        <h2 class="text-2xl font-semibold">Members</h2>
        <ul>
          {#each club.members as member}
            <li>{member.name} (ID: {member.studentId})</li>
          {/each}
        </ul>
      </div> -->
    
      <div class="flex flex-col space-y-2">
        <h2 class="text-2xl font-semibold">Contacts</h2>
        <ul>
            <li>
              {club.contacts.ig} - Phone: {club.contacts.line}, Email: {club.contacts.facebook}
            </li>

        </ul>
      </div>
    </div>
  {/if}
  