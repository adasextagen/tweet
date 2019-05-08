var input
var comment
var commentsList

var allComments = [
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
]

var sendComment = function(){
  input = document.getElementById('commentBox');
  comment = input.value;

  var commentItem = document.createElement('li')
  commentItem.classList.add('comment')
  commentItem.innerText = comment

  commentsList = document.getElementById('commentsList')
  commentsList.appendChild(commentItem)
}






