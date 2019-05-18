var input
var newComment
var commentsList
/*1
var allComments = [
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
]
*/

var allComments = [
  {text:'uno', isInitial:true},
  {text:'dos', isInitial:true}
]

var handleKeyPress = function(event){
  //console.log(event.code)
  if( event.code === 'Enter'){ 
    sendComment()
  }
}

var printComments = function(){
  commentsList = document.getElementById('commentsList')
  commentsList.innerHTML = ''
  allComments.map(function(comment){
    var commentItem = document.createElement('li')
    commentItem.classList.add('comment')
    commentItem.innerText = comment.text    
    commentsList.appendChild(commentItem)
  })
}

var sendComment = function(){
  input = document.getElementById('commentBox');
  newComment = input.value;
  
  if(newComment !== '' && newComment.length > 2){
    input.value = '';
    //allComments.push(newComment)
    allComments.unshift({
        text:newComment,
        isInitial:true
      })
    console.log(allComments)
    printComments()
  }
}
