window.addEventListener('scroll',function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky",window.scrollY > 0);

});
function toggleMenu(){
	const menuTogle = document.querySelector('.menuTogle');
	const maine__nav = document.querySelector('.maine__nav');
	menuTogle.classList.toggle('active');
	maine__nav.classList.toggle('active');
}