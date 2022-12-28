import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/services/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  //@Output() nouvelAssignment  = new EventEmitter<Assignment>();
  nomDevoir:string = "";
  dateDeRendu:Date;

  constructor(private assignmentsService: AssignmentsService,
              private router: Router){}
  
  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random()*1000000000000000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    //this.nouvelAssignment.emit(newAssignment);

    this.assignmentsService.addAssignments(newAssignment)
    .subscribe(reponse => console.log(reponse.message));

    this.router.navigate(['/home'], {replaceUrl:true});
  }

  ngOnInit(): void {
  }

}
