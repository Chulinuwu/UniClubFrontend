<script lang="ts">
    export let data;
    const { club } = data;
  </script>
  
  {#if club}
    <div class="w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
      <h1 class="text-4xl font-bold">{club.name}</h1>
      <img src={club.imageURL} alt="{club.name}" class="w-64 h-64 object-cover rounded-lg" />
      <p class="text-lg">{club.header}</p>
      <div class="flex flex-col space-y-2">
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
      </div>
    
      <div class="flex flex-col space-y-2">
        <h2 class="text-2xl font-semibold">Contacts</h2>
        <ul>
          {#each club.contacts as contact}
            <li>
              {contact.name} - Phone: {contact.phone}, Email: {contact.email}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
  