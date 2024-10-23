<script lang="ts">
	export let imageURL: string;
	export let className: string = '';
	export { className as class };
</script>

<div class="white {className} w-[100px] h-[100px] overflow-hidden">
	<img src={imageURL} alt="profile" class="w-full h-full object-cover" />
</div>
