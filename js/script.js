// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	$('body').scrolltop ('700');
   

   e.preventDefault();
});




// paralax
$(window).scroll(function() {
	var wScroll = $(this) .scrolltop();


	console.log(wScroll);
})