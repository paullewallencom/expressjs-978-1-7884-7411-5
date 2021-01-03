$(document).ready(function() {
    $('.delete-movie').click(function(event) {
    $target = $(event.target)
    $.ajax({
      type: 'DELETE',
      url: '/movies/delete/' + $target.attr('data-movie-id'),
      data: {
        _csrf: $target.attr('data-csrf')
      },
      success: function(response) {
        $target.parent().parent().remove();
        alert('Deleting Movie');
        window.location.href = '/movies';
      },
      error: function(error) {
        alert(error);
          console.log(error);
      }
    })
  });
})
