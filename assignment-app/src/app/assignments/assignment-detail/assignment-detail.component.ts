import { Component,OnInit, Input} from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/services/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})

export class AssignmentDetailComponent implements OnInit {
  /*@Input()*/ assignmentTransmis: Assignment;
  /*@Output() suppAssignment  = new EventEmitter<Assignment>();*/

  constructor(private assignmentsService: AssignmentsService,
              private route:ActivatedRoute,
              private router:Router,
              private authService: AuthService){}

  ngOnInit(): void{
    this.getAssignment();
  }

  isAdmin():boolean {
    return this.authService.isAdmin();
  }

  isUser():boolean {
    return this.authService.isUser();
  }

  getAssignment(){
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this.assignmentsService.getAssignment(id)
    .subscribe((assignment) => 
    {
      this.assignmentTransmis = assignment
    });
  }
  
  onAssignmentRendu(){
    if (!this.assignmentTransmis) return;

    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe((message) => 
      {
        console.log(message);
      });
  }

  onDelete(){
    if(!this.assignmentTransmis) return;

    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
    .subscribe((message) => 
    {
      console.log(message);
      this.assignmentTransmis = null;
      this.router.navigate(["/home"], {replaceUrl:true});
    });
  }
}
