<!-- App -->
<div id="app">
	<my-dropdown></my-dropdown>
</div>
<!-- Dropdown template -->
<template id="Navbar">
  <div class="About">
		<!-- On click we call the toggle method -->
		<div class="selected" @click="toggle">Selected value</div>

		<div class="options" v-show="isOpen">
			<div class="option">option 1</div>
			<div class="option">option 2</div>
			<div class="option">option 3</div>
		</div>
	</div>
</template>
