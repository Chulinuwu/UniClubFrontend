<script lang="ts">
	import Button from './button.svelte';
	import Placeholder from './placeholder.svelte';
	// import Topnavbar from './Topnavbar.svelte';
	import ClubNavbar from './ClubNavbar.svelte';
	// import ProfileNavbar from './profileNavbar.svelte';
	import ProfileIcon from './profile.svelte';
	import SearchBar from './searchBar.svelte';
	import ClubCard from './clubCard.svelte';
	import FeedCard from './feedCard.svelte';
	import MemberCard from './memberCard.svelte';
	import TabCapsule from './tabCapsule.svelte';
	import BottomNavbar from './bottomNavbar.svelte';

	import clubIcon from '../icon/clubicon.svg';
	import home from './../icon/homeicon.svg';
	import edit from '../icon/edit.svg';
	import storkeheart from '../icon/strokeheart.svg';
	import fullheart from '../icon/fullheart.svg';
	import notification from '../icon/notification.svg';
	import search from '../icon/search.svg';
	import uniclub from '$lib/images/Uniclub.png';
	import profile1 from '../images/profile1.png';
	import profile2 from '../images/profile2.jpg';
	import profile3 from '../images/profile3.jpg';
	import profile4 from '../images/profile4.jpg';

	let x = 0;
	function handlebuttonclick() {
		x++;
	}

	let searchValue = '';
	const clubs = ['SportClub', 'MusicClub', 'ArtClub', 'ScienceClub', 'DramaClub'];

	// Computed property to filter clubs based on searchValue
	$: filteredClubs = clubs.filter((club) => club.toLowerCase().includes(searchValue.toLowerCase()));

	let selectedTabs: string[] = [];
	let tabs = [
		{ label: 'Sport', active: false },
		{ label: 'Science', active: false },
		{ label: 'Math', active: false },
		{ label: 'Art', active: false }
	];

	function toggle(index: number) {
		tabs = tabs.map((tab, i) => (i === index ? { ...tab, active: !tab.active } : tab));
		const tab = tabs[index];
		selectedTabs = tab.active
			? [...selectedTabs, tab.label]
			: selectedTabs.filter((label) => label !== tab.label);
	}
</script>

<div class="max-w-[100vw]">
	<!-- <Topnavbar/> -->
	<ClubNavbar />
	<!-- <ProfileNavbar/> -->
	<section class="p-10 mb-[100px]">
		<div class="w-full justify-center flex h-[100px] mt-[100px]">
			<img src={uniclub} alt="uniclub" />
		</div>
		<div class="font-semibold text-xl mt-10 w-full flex justify-center text-uni-red">
			PlayGround (CEDT Sandbox)
		</div>
		<div class="font-light text-xl mt-10">This is light text</div>
		<div class="font-normal text-xl">This is normal text</div>
		<div class="font-bold text-xl">This is bold text</div>

		<section class="text-2xl mt-10 flex flex-col gap-6">
			<div class="text-uni-red">Button</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div>
				<Button buttonName="Click Me" on:click={handlebuttonclick} />
				<p>button clicked {x} time</p>
			</div>
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6">
			<div class="text-uni-red">Placeholder</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<Placeholder inputName="Type me" />
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6">
			<div class="text-uni-red">Icon</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div class="flex flex-wrap gap-5">
				<img src={home} alt="home" />
				<img src={edit} alt="edit" />
				<img src={storkeheart} alt="strokeheart" />
				<img src={fullheart} alt="fullheart" />
				<img src={notification} alt="notification" />
				<img src={search} alt="search" />
			</div>
		</section>

		<!-- If you want to make it as square / you show add class 'bg-white rounded p-2' if you want shadow use 'shadow-md' 
		 if you want to make it circle just use 'rounded-full' -->
		<section class="text-2xl mt-10 flex flex-col gap-6">
			<div class="text-uni-red">Profile icon</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div class="flex flex-wrap gap-5 items-center">
				<ProfileIcon imageURL={profile1} class="border-2 border-black" />
				<ProfileIcon imageURL={profile4} />
				<ProfileIcon imageURL={profile2} class="border-1 w-[75px] h-[75px] border-uni-graytext" />
				<ProfileIcon imageURL={profile3} class="border w-[50px] h-[50px] border-uni-graybox" />
			</div>
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6">
			<div class="text-uni-red">Search Bar</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<SearchBar bind:value={searchValue} />
			<p class="text-uni-red">Search Value : {searchValue == '' ? 'no value' : searchValue}</p>
			{#if filteredClubs.length > 0}
				<ul class="list-disc list-inside text-uni-red font-light">
					{#each filteredClubs as club}
						<li>{club}</li>
					{/each}
				</ul>
			{:else}
				<p class="text-uni-red">No clubs found.</p>
			{/if}
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6 w-full">
			<div class="text-uni-red">Capsule Filter</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div class="flex flex-wrap items-center gap-2">
				{#each tabs as tab, i}
					<TabCapsule active={tab.active} label={tab.label} on:click={() => toggle(i)} />
				{/each}
			</div>
			{#if selectedTabs.length > 0}
				<p class="mt-4">Selected Tabs: {selectedTabs.join(', ')}</p>
			{:else}
				<p class="mt-4">No Tab Selected</p>
			{/if}
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6">
			<div class="text-uni-red">Club card</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div class="flex flex-col gap-3">
				<ClubCard
					class="hover:scale-105 transition-all"
					imageURL={clubIcon}
					name="CEDT Sandbox Clubbbb"
					quote="loremipsum asda jlopajdsoiw kasows"
				/>
				<ClubCard imageURL={clubIcon} name="CEDT Sandbox" quote="loremipsum asdas" />
				<ClubCard imageURL={clubIcon} name="CEDT Sandbox" quote="loremipsum asdas" />
			</div>
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6 w-full">
			<div class="text-uni-red">Feed card</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div class="flex flex-col gap-3">
				<FeedCard
					date="10/22/2024"
					imageURL={profile2}
					name="CEDT Sandbox Clubbbb"
					header="Moodeng is born i am very happy to see Moodeng"
				/>
				<FeedCard
					date="05/22/2024"
					imageURL={profile2}
					name="CEDT Sandbox Clubbbb"
					header="Moodeng is born i am very happy to see Moodeng"
				/>
				<FeedCard
					date="05/22/2020"
					imageURL={profile2}
					name="CEDT Sandbox Clubbbb"
					header="Moodeng is born i am very happy to see Moodeng"
				/>
			</div>
		</section>

		<section class="text-2xl mt-10 flex flex-col gap-6 w-full">
			<div class="text-uni-red">Member card</div>
			<div class="w-full h-1 bg-uni-red"></div>
			<div class="flex flex-col gap-3">
				<!-- Top 5 people with longest name in the world -->
				<MemberCard
					imageURL={profile2}
					name="Nicholas Unless-Jesus-Christ-Had-Died-For-Thee-Thou-Hadst-Been-Damned Barbon"
					role="Member"
				/>
				<!-- Uniclub Member -->
				<MemberCard imageURL={profile2} name="Jirameth Wannasiwaporn" role="Super Admin" />
				<MemberCard imageURL={profile2} name="Kitiwan Nawanetiwong" role="Admin" />
				<MemberCard imageURL={profile2} name="Amphikapha Thathong" role="Member" />
			</div>
		</section>
	</section>
	<BottomNavbar/>
</div>
