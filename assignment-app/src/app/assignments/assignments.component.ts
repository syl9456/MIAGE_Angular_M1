import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentsService } from '../shared/services/assignments.service';
import { Assignment } from './assignment.model';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})


export class AssignmentsComponent implements OnInit {
  titre = "Mon application de devoirs !";
  page: number = 1;
  limit: number = 10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;

  assignmentSelectionne:Assignment;
  assignments:Assignment[];
  tableAssignments: any;
  columnsToDisplay = ["nom", "matiere", "rendu", "dateDeRendu"];

  rechercheNom: string = "";
  rechercheMatiere: string = "";


  constructor(private assignmentService: AssignmentsService,
              private router: Router) { }

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(): void {    
    this.getAssignments();
  }

  //Prend les assignments, pagine et subscribe le résultat 
  getAssignments(){
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
     .subscribe((data) => {
        this.assignments = data.docs;
        this.tableAssignments = new MatTableDataSource(this.assignments);
        this.tableAssignments.sort = this.sort;
        this.tableAssignments.filterPredicate = (data: Assignment) => { 
          return ((data.nom.indexOf(this.rechercheNom) != -1) && (data.matiere.indexOf(this.rechercheMatiere) != -1));  
        };
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log("Données reçues");
     });
  }

  assignmentClick(assignment: Assignment){
    console.log(assignment);
    this.assignmentSelectionne = assignment;
  }

  handlePageEvent(e:PageEvent){
    this.page = e.pageIndex+1;
    this.limit = e.pageSize;
    console.log(e);
    console.log("prevPage : " + this.prevPage + " Page : "+ this.page + " limite : " + this.limit);
    this.getAssignments();
  }

  applyFilter() : void {
    //this.rechercheNom = this.rechercheNom.trim();
    //this.rechercheNom = this.rechercheNom.toLowerCase();
    this.tableAssignments.filter = this.rechercheNom + this.rechercheMatiere;
    console.log(this.tableAssignments.filter);
    console.log(this.tableAssignments.filteredData);
  }
}


