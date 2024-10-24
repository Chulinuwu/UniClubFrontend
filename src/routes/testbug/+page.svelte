<script lang="ts">
    import profile2 from '../../../lib/images/profile2.jpg'; // Adjust the import path as needed
    import ProfileNavbar from '$lib/components/profileNavbar.svelte';

    // Retrieve club data from localStorage
    const clubData = localStorage.getItem('clubMemos');
	console.log(clubData);
    // let club = {
    //     clubId: '',
    //     date: '',
    //     faculty: '',
    //     info: '',
    //     imageURL: '',
    //     name: '',
    //     header: '',
    //     tags: {
    //         category: '',
    //         status: '',
    //         type: ''
    //     },
    //     members: [] as { name: string; role: string }[],
    //     contacts: {
    //         ig: '',
    //         line: '',
    //         facebook: ''
    //     }
    // };

    // if (clubData) {
    //     club = JSON.parse(clubData);
    //     console.log(club);
    // }
</script>

<!-- {#if club.name}
<ProfileNavbar />
<div class="flex w-full h-[100px]"></div>
<div class="card">
    <img src={club.imageURL} alt={club.name} class="card-img" />
    <div class="card-content">
        <h2>{club.name}</h2>
        <p>{club.header}</p>
        <p>{club.info}</p>
        <p><strong>Faculty:</strong> {club.faculty}</p>
        <p><strong>Date:</strong> {club.date}</p>
        <p><strong>Category:</strong> {club.tags.category}</p>
        <p><strong>Status:</strong> {club.tags.status}</p>
        <p><strong>Type:</strong> {club.tags.type}</p>
        <div class="contacts">
            <p><strong>Instagram:</strong> {club.contacts.ig}</p>
            <p><strong>Line:</strong> {club.contacts.line}</p>
            <p><strong>Facebook:</strong> {club.contacts.facebook}</p>
        </div>
        <div class="members">
            <h3>Members:</h3>
            <ul>
                {#each club.members as member}
                    <li>{member.name} ({member.role})</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
{/if} -->

<style>
    .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        max-width: 400px;
        margin: auto;
    }
    .card-img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    .card-content {
        padding: 16px;
    }
    .contacts, .members {
        margin-top: 16px;
    }
</style>