import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/services/assignments.service';
import { AuthService } from './shared/services/auth.service';
import { TokenStorageService } from './shared/services/token-storage.service';
import { DOCUMENT } from '@angular/common';

export class ButtonOverviewExample {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment App';
  private roles: string[];
  isLoggedIn = false;
  isAdmin = false;
  isUser = false;
  isModerator = false;
  username:string;
  public theme: string = 'light-theme';

  constructor(private router: Router,
              private assignmentsService: AssignmentsService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isUser = this.authService.isUser();
      this.isAdmin = this.authService.isAdmin();
      this.isModerator = this.authService.isModerator();

      this.username = user.username;
      console.log("Utilisateur connecté ");
    }
  }


  peuplerBD() {
    //version naive et simple
    //this.assignmentsService.peuplerBD();

    // meilleure version :
    this.assignmentsService.peuplerBDAvecForkJoin()
      .subscribe(() => {
        console.log("LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTS AJOUTES, ON RE-AFFICHE LA LISTE");
      // replaceUrl = true = force le refresh, même si
      // on est déjà sur la page d’accueil
      // Marche plus avec la dernière version d’angular
        this.router.navigate(['home'], {replaceUrl:true});
      })
    }

    logout(): void {
      this.tokenStorageService.signOut();
      window.location.reload();
    }


    toggleTheme() {
      if (this.theme === 'light-theme') {
        this.selectDarkTheme();
      } else {
        this.selectLightTheme();
      }
    }
    
    selectLightTheme(){
      this.theme = 'light-theme';
      this.document.body.classList.remove('dark-theme');
      this.document.body.classList.add('light-theme');
    }

    selectDarkTheme(){
      this.theme = 'dark-theme';
      this.document.body.classList.remove('light-theme');
      this.document.body.classList.add('dark-theme');
    }
}
