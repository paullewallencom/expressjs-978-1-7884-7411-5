$(document).ready(() => {
  $('.category-delete').on('click', (e) => {
    $target = $(e.target);
		$.ajax({
			type: 'DELETE',
			url: '/categories/delete/'+$target.attr('data-cat-id'),
			success: (response) => {
				alert('Category Removed');
				window.location.href='/'
			},
			error: (error) => {
				console.log(error);
			}
		});

  });
});
