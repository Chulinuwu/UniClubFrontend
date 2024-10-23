<script lang="ts">
    import Home from "../icon/homeicon.svg";
    import Search from "../icon/search.svg";
    import fullheart from "../icon/fullheart.svg";
    import Profile from "./profile.svelte";
    import profile1 from "../images/profile1.png";

	let isHeartFull = false;

	function toggleHeart() {
		isHeartFull = !isHeartFull;
	}
</script>

<div class="w-full h-[100px] max-w-[100vw] p-5 fixed bottom-0 bg-white flex items-center justify-between">
	<div class="flex h-[25px]"><img src={Home} alt="home" /></div>
	<div class="flex h-[25px]"><img src={Search} alt="Search" /></div>
    <div class="flex h-[25px]"><img src={fullheart} alt="fullheart" /></div>
    <div class="flex h-[25px]"><Profile imageURL={profile1} class="w-auto h-auto" /></div>
     
	<!-- <div class="flex h-[50px]">
		<button on:click={toggleHeart} class="cursor-pointer">
			<img
				src={isHeartFull ? fullheart : strokeheart}
				alt={isHeartFull ? 'full heart' : 'stroke heart'}
			/></button
		>
	</div> -->
</div>
