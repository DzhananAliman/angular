
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.html',
  styles: '',
})
export class CommentsComponent {
  comments: string[] = []; 
  newComment: string = ''; 

  constructor(private router: Router) {
   
    const token = localStorage.getItem('token');
    if (!token) {
      
      this.router.navigate(['/login']);
    }

   
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.saveComments();
      this.newComment = ''; 
    }
  }

  editComment(index: number) {
    const editedComment = prompt("Edit your comment", this.comments[index]);
    if (editedComment !== null) {
      this.comments[index] = editedComment.trim();
      this.saveComments();
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1); 
    this.saveComments();
  }

  saveComments() {
   
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  onLogout() {
   
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
