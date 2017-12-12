// Rating bar
$('.item-rating').find("#example").barrating({theme: 'fontawesome-stars'});

// Gallery
$("#gallery").unitegallery({
    gallery_theme: "tiles",
    gallery_min_width: 180,				//gallery minimal width when resizing
    tiles_type: "justified",			//must option for the tiles - justified type
    tiles_justified_row_height: 150,	//base row height of the justified type
    tiles_justified_space_between: 0,	//space between the tiles justified type
    tiles_set_initial_height: true,		//columns type related only
     tiles_enable_transition: true,		//enable transition when screen width change
});