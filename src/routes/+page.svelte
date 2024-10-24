<script lang="ts">
	import Uniclublogo from '$lib/images/Uniclub.png';
	import Button from '$lib/components/button.svelte';
	import {clubMemos} from '$lib/mock/clubmemos';
	import {feedMemos} from '$lib/mock/feedmemos';
	import {userProfile} from '$lib/mock/userMemos';
	import type { ClubMemos } from '$lib/interface/interface';
	import type { User } from '$lib/interface/interface';
	import type { FeedMemos } from '$lib/interface/interface';

	import { onMount } from 'svelte';
	import { clubStore } from '$lib/store/clubStore';
	import { insertClub } from '$lib/store/clubStore';
	import profile2 from '$lib/images/profile2.jpg'

	// let club: ClubMemos
	// let user1: User
	// let feed1: FeedMemos
    // onMount(() => {
    //     const mockMemoString = JSON.stringify(clubMemos);
	// 	const feed = JSON.stringify(feedMemos);        
	// 	const user = JSON.stringify(userProfile);
	// 	localStorage.setItem('clubMemos', mockMemoString);
	// 	localStorage.setItem('feedMemos', feed);
	// 	localStorage.setItem('userMemos', user);
    //     let clubData = localStorage.getItem('clubMemos');
	// 	let feedData = localStorage.getItem('feedMemos');
	// 	let userData = localStorage.getItem('userMemos');
    //     if (clubData) {
	// 		club = JSON.parse(clubData);
    //     }
	// 	if (feedData) {
    //         feed1 = JSON.parse(feedData);
    //     }        
	// 	if (userData) {
    //         user1 = JSON.parse(userData);
    //     }
    // });

	let testClub = {clubId: 'C001',
		date: '10/22/2024',
		faculty: 'Faculty of Engineering',
		info: 'The Faculty of Engineeriasdas dsssssss sssssss sssssssss sssssssss sssssd sedasdas asdasdas ng is one of the largest faculties in the University of Moratuwa. It offers undergraduate and postgraduate programs in a wide range of engineering disciplines.',
		imageURL: profile2,
		name: 'CEDT Sandbox Clubbbb',
		header: 'Moodeng is born i am very happy to see Moodeng',
		tags: {
			category: 'Science',
			status: 'Open',
			type: 'University'
		},
		members: [
			{ name: 'Jirameth Wannasiwaporn', studentId: 'S12345', role: 'Super Admin' },
			{ name: 'Jane Smith', studentId: 'S12346', role: 'Admin' },
			{ name: 'Alice Johnson', studentId: 'S12347', role: 'User' },
			{ name: 'Jane Smith', studentId: 'S12344', role: 'Super Admin' },
			{ name: 'Jane Smith', studentId: 'S12348', role: 'Admin' },
			{ name: 'Alice Johnson', studentId: 'S12349', role: 'User' },
			{ name: 'Jane Smith', studentId: 'S12340', role: 'Admin' },
			{ name: 'Alice Johnson', studentId: 'S12341', role: 'User' },
			{ name: 'Jane Smith', studentId: 'S12342', role: 'Admin' },
			{ name: 'Alice Johnson', studentId: 'S12343', role: 'User' }
		],
		contacts: {
			ig: 'cusandbox',
			line: 'cusandbox.line',
			facebook: 'cusandbox.facebook'
		}
	};
	
	function handleInsertClub() {
		console.log("Insert new club")
		insertClub(testClub);
	}

	console.log($clubStore.length);
  
</script>

<div class="w-full h-full fixed flex flex-col justify-center items-center">
	<div class="w-auto h-auto pb-32 flex flex-col gap-[12px] justify-center items-center">
		<img src={Uniclublogo} alt="Uniclub" class="w-[200px]" />
		<p class="text-2xl font-bold">Welcome to UniClub !</p>
		<p class="text-base text-uni-graytext">All club, One place</p>
		<a href="/login2" class="w-full h-full">
			<Button on:click={handleInsertClub} buttonName="Login with CU Account" class="mt-5" /></a
		>
		<a href="/login2" class="w-full h-full"> <Button buttonName="Login with Google Account" /></a>
	</div>
	<div class=" w-full h-[100px] absolute bottom-0 flex justify-center items-center">
		<p class="text-black">Don't have an account? <span class="text-uni-red">Register!</span></p>
	</div>
</div>
