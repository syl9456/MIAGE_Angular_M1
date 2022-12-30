import { Injectable } from '@angular/core';
import { Assignment } from '../../assignments/assignment.model';
import { forkJoin, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap }  from 'rxjs/operators';
import { bdInitialAssignments } from '../data';



@Injectable({
  providedIn: 'root'
})


export class AssignmentsService {
  assignments:Assignment[] = [];

  constructor(private loggingService:LoggingService,
              private http:HttpClient) { }

  url = "http://localhost:8010/api_assignment/assignments"


  private HttpOptions = {
    headers : new HttpHeaders({
      'Content Type': 'application/json'
    })
  }

  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url);
    //return of(this.assignments);
  }

  getAssignmentsPagine(page:number, limit:number):Observable<any> {
    return this.http.get<any>(this.url + "?page=" + page + "&limit=" + limit);
  }

  getAssignment(id:number) : Observable<Assignment|undefined>{
    //const a:Assignment|undefined = this.assignments.find(a => a.id === id);
    //return of(a);

    console.log("det by id id = " + id);
    return this.http.get<Assignment>(this.url + "/" + id)
    .pipe(
      map(a => 
      {
        return a;
      }),
      tap(_ => 
      {
        console.log("tap: assignment avec id = " + id + " requete GET envoyée sur MongoDB cloud");
      }),
      catchError(this.handleError<Assignment>('getAssignment(id=${id})'))
    );
  }

  private handleError<T>(operation, result?:T){
    return (error:any) : Observable<T> => {
      console.error(error);
      console.log(operation + ' a echoué ' + error.message);

      return of(result as T);
  };
  }

  addAssignments(assignment: Assignment): Observable<any> {
    //this.assignments.push(assignment);
    //this.loggingService.log(assignment.nom, "ajouté");

    //return of("Assignment ajouté");

    return this.http.post<Assignment>(this.url, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any>{
    //let pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos,1);
    //this.loggingService.log(assignment.nom, "supprimé ! ");

    //return of("Assignment supprimé");

    let deleteURI =  this.url + "/" + assignment._id;
    return this.http.delete(deleteURI);
  }

  updateAssignment(assignment:Assignment): Observable<any> {
    //let index = this.assignments.findIndex(elementAssignments => elementAssignments.id === assignment.id);
    //this.assignments[index] = assignment;

    //return of("Assignment service: assignment modifié")
    //this.loggingService.log(assignment.nom, "Modifié !");
    //return of("Assignment modifié");
    
    return this.http.put<Assignment>(this.url,assignment);
  }

  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment:any = [];
 
    bdInitialAssignments.forEach((a) => {
      const nouvelAssignment:any = new Assignment();
 
      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;
      /*nouvelAssignment.auteur = a.auteur;
      nouvelAssignment.note = a.note;
      nouvelAssignment.remarque = a.remarque;
      nouvelAssignment.matiere = a.matiere;*/
 
      appelsVersAddAssignment.push(this.addAssignments(nouvelAssignment));
    });
    return forkJoin(appelsVersAddAssignment); 
    // renvoie un seul Observable pour dire que c'est fini
  }
}
